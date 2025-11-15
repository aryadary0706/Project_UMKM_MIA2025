// stores/umkmStore.ts
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface UMKM {
    id: number;
    name: string;
    category: string;
    description: string;
    address: string;
    region: string;
    phone?: string;
    image?: string;
    website?: string;
    email?: string;
    promo?: string;
    isNew?: boolean;
    isPopular?: boolean;
    Rating: number;
    hours: string;
    whatsapp?: string;
    coordinates: {
        lat: number;
        lng: number;
    };
    gallery?: string[];
    operationalDays?: string[];
}

interface UMKMStoreState {
    umkms: UMKM[];
    filteredUMKMs: UMKM[];
    searchQuery: string;
    selectedCategory: string;
    selectedLocation: string;
    isPromo: boolean;
    isNew: boolean;
    isLoading: boolean;
    error: string | null;
    
    // Actions
    setUMKMs: (data: UMKM[]) => void;
    createUMKM: (umkm: UMKM) => void;
    updateUMKM: (id: number, data: Partial<UMKM>) => void;
    deleteUMKM: (id: number) => void;
    setSearchQuery: (query: string) => void;
    setSelectedCategory: (category: string) => void;
    setSelectedLocation: (location: string) => void;
    togglePromo: () => void;
    toggleNew: () => void;
    applyFilters: () => void;
    resetFilters: () => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
    getUMKMById: (id: number) => UMKM | undefined;
    getCategories: () => string[];
    getRegions: () => string[];
}

export const useUMKMStore = create<UMKMStoreState>()(
    devtools(
        persist(
            (set, get) => ({
                // State
                umkms: [],
                filteredUMKMs: [],
                searchQuery: "",
                selectedCategory: "",
                selectedLocation: "",
                isPromo: false,
                isNew: false,
                isLoading: false,
                error: null,

                // Basic CRUD Actions
                setUMKMs: (data) => 
                    set({ 
                        umkms: data, 
                        filteredUMKMs: data,
                        isLoading: false,
                        error: null 
                    }),

                createUMKM: (umkm) =>
                    set((state) => {
                        // Logika untuk menghasilkan ID baru yang unik (simulasi auto-increment)
                        const newId = state.umkms.length > 0 
                            ? Math.max(...state.umkms.map(u => u.id)) + 1 
                            : 1;

                        const newUMKM = { 
                            ...umkm, 
                            id: newId,
                            // Pastikan properti wajib yang mungkin lupa diisi memiliki nilai default
                            Rating: umkm.Rating || 0,
                            coordinates: umkm.coordinates || { lat: 0, lng: 0 },
                            
                            // Tambahkan flag isNew untuk ditampilkan di list
                            isNew: true, 
                        };
                        
                        const newUMKMs = [...state.umkms, newUMKM];
                        
                        // **TIDAK PERLU** set filteredUMKMs di sini, karena applyFilters() akan dipanggil nanti
                        return {
                            umkms: newUMKMs,
                        };
                    }),

                updateUMKM: (id, data) =>
                    set((state) => {
                        const updatedUMKMs = state.umkms.map((umkm) =>
                            umkm.id === id ? { ...umkm, ...data } : umkm
                        );
                        return {
                            umkms: updatedUMKMs,
                        };
                    }),

                deleteUMKM: (id) =>
                    set((state) => ({
                        umkms: state.umkms.filter((umkm) => umkm.id !== id),
                    })),

                // Filter Actions - Optimized
                setSearchQuery: (query) => {
                    set({ searchQuery: query });
                    // Debounce bisa ditambahkan di component level
                    get().applyFilters();
                },

                setSelectedCategory: (category) => {
                    set({ selectedCategory: category });
                    get().applyFilters();
                },

                setSelectedLocation: (location) => {
                    set({ selectedLocation: location });
                    get().applyFilters();
                },

                togglePromo: () => {
                    set((state) => ({ isPromo: !state.isPromo }));
                    get().applyFilters();
                },

                toggleNew: () => {
                    set((state) => ({ isNew: !state.isNew }));
                    get().applyFilters();
                },

                resetFilters: () => {
                    set({
                        searchQuery: "",
                        selectedCategory: "",
                        selectedLocation: "",
                        isPromo: false,
                        isNew: false,
                    });
                    get().applyFilters();
                },

                // Optimized filter function
                applyFilters: () => {
                    const {
                        umkms,
                        searchQuery,
                        selectedCategory,
                        selectedLocation,
                        isPromo,
                        isNew,
                    } = get();

                    // Early return if no filters applied
                    if (
                        !searchQuery &&
                        (!selectedCategory || selectedCategory === "semua") &&
                        (!selectedLocation || selectedLocation === "semua") &&
                        !isPromo &&
                        !isNew
                    ) {
                        set({ filteredUMKMs: umkms });
                        return;
                    }

                    // Normalize search query once
                    const normalizedQuery = searchQuery.toLowerCase().trim();

                    const filtered = umkms.filter((umkm) => {
                        // Search - check multiple fields
                        if (normalizedQuery) {
                            const matchesSearch =
                                umkm.name.toLowerCase().includes(normalizedQuery) ||
                                umkm.description?.toLowerCase().includes(normalizedQuery) ||
                                umkm.address?.toLowerCase().includes(normalizedQuery);
                            
                            if (!matchesSearch) return false;
                        }

                        // Category filter
                        if (selectedCategory && selectedCategory !== "semua") {
                            if (umkm.category.toLowerCase() !== selectedCategory.toLowerCase()) {
                                return false;
                            }
                        }

                        // Location filter
                        if (selectedLocation && selectedLocation !== "semua") {
                            if (umkm.region.toLowerCase() !== selectedLocation.toLowerCase()) {
                                return false;
                            }
                        }

                        // Promo filter
                        if (isPromo && !umkm.promo) {
                            return false;
                        }

                        // New filter
                        if (isNew && !umkm.isNew) {
                            return false;
                        }

                        return true;
                    });

                    set({ filteredUMKMs: filtered });
                },

                // Loading and Error states
                setLoading: (loading) => set({ isLoading: loading }),
                
                setError: (error) => set({ error }),

                // Selectors
                getUMKMById: (id) => {
                    return get().umkms.find((umkm) => umkm.id === id);
                },

                getCategories: () => {
                    const categories = new Set(
                        get().umkms.map((umkm) => umkm.category)
                    );
                    return Array.from(categories).sort();
                },

                getRegions: () => {
                    const regions = new Set(
                        get().umkms.map((umkm) => umkm.region)
                    );
                    return Array.from(regions).sort();
                },
            }),
            {
                name: "umkm-storage", // Key untuk localStorage
                partialize: (state) => ({
                    // Hanya persist data penting, tidak termasuk filter states
                    umkms: state.umkms,
                }),
            }
        ),
        {
            name: "UMKM Store", // Nama untuk Redux DevTools
        }
    )
);

// Custom hooks untuk selector yang lebih optimal
// export const useFilteredUMKMs = () => useUMKMStore((state) => state.filteredUMKMs);
// export const useUMKMCategories = () => useUMKMStore((state) => state.getCategories());
// export const useUMKMRegions = () => useUMKMStore((state) => state.getRegions());
// export const useUMKMFilters = () => useUMKMStore((state) => ({
//     searchQuery: state.searchQuery,
//     selectedCategory: state.selectedCategory,
//     selectedLocation: state.selectedLocation,
//     isPromo: state.isPromo,
//     isNew: state.isNew,
// }));
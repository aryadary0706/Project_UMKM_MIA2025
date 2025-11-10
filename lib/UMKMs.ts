import { create } from "zustand";

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
	promo?: boolean;
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
}


interface UMKMStoreState {
	umkms: UMKM[];
	filteredUMKMs: UMKM[];
	searchQuery: string;
	selectedCategory: string;
	selectedLocation: string;
	isPromo: boolean;
	isNew: boolean;

	setUMKMs: (data: UMKM[]) => void;
	setSearchQuery: (query: string) => void;
	setSelectedCategory: (category: string) => void;
	setSelectedLocation: (location: string) => void;
	togglePromo: () => void;
	toggleNew: () => void;
	applyFilters: () => void;
	resetFilters: () => void;
}

export const useUMKMStore = create<UMKMStoreState>((set, get) => ({
	umkms: [],
	filteredUMKMs: [],
	searchQuery: "",
	selectedCategory: "",
	selectedLocation: "",
	isPromo: false,
	isNew: false,

	setUMKMs: (data) => set({ umkms: data, filteredUMKMs: data }),

	setSearchQuery: (query) => {
		set({ searchQuery: query });
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

	applyFilters: () => {
		const {
			umkms,
			searchQuery,
			selectedCategory,
			selectedLocation,
			isPromo,
			isNew,
		} = get();

		const filtered = umkms.filter((umkm) => {
			const matchesSearch = umkm.name
				.toLowerCase()
				.includes(searchQuery.toLowerCase());

			const matchesCategory =
				selectedCategory === "" ||
				selectedCategory === "semua" ||
				umkm.category.toLowerCase() === selectedCategory.toLowerCase();

			const matchesLocation =
				selectedLocation === "" ||
				selectedLocation === "semua" ||
				umkm.region.toLowerCase() === selectedLocation.toLowerCase();

			const matchesPromo = !isPromo || umkm.promo === true;
			const matchesNew = !isNew || umkm.isNew === true;

			return (
				matchesSearch &&
				matchesCategory &&
				matchesLocation &&
				matchesPromo &&
				matchesNew
			);
		});

		set({ filteredUMKMs: filtered });
	},
}));

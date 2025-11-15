import { create } from "zustand";

export interface User {
  email: string;
  username: string;
  is_affiliate: boolean;
  owned_umkm_id: number | null;
}

interface UserState {
  user: User | null;
  setUser: (user: User | null) => void;
  setAffiliateStatus: (isAffiliate: boolean) => void;
}

export const useUserStore = create<UserState>((set) => ({
  // MOCK USER (default)
  user: {
    email: "mock@email.com",
    username: "i am mock user",
    is_affiliate: false,
    owned_umkm_id: null,
  },
  setUser: (user) => set({ user }),
  setAffiliateStatus: (isAffiliate: boolean) =>
  set((state) => {
    console.log("Affiliate status updated to:", isAffiliate);

    return {
      user: state.user
        ? { ...state.user, is_affiliate: isAffiliate }
        : null,
    };
  }),
}));

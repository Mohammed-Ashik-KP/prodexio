import { create } from "zustand";
import { AuthStoreType, UserAuthType } from "@/types";

export const useAuthStore = create<AuthStoreType>((set) => {
  return {
    user: {
      id: null,
      email: null,
      name: null,
      provider: null,
    },
    setUser: (value: UserAuthType) =>
      set(() => ({
        user: {
          id: value.id,
          email: value.email,
          name: value.name,
          provider: value.provider,
        },
      })),
  };
});

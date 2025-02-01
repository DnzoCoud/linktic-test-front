import { AuthDto } from "@/models/auth";
import { create } from "zustand";

interface CompanyState {
  authData: AuthDto | null;
  setAuth: (auth: AuthDto) => void; // Guarda el array completo
}

export const useAuthStore = create<CompanyState>((set) => ({
  authData: null,
  setAuth: (authData) => set({ authData }),
}));

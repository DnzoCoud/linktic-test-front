import { CompanyDto } from "@/models/company";
import { create } from "zustand";

interface CompanyState {
  companies: CompanyDto[];
  setCompanies: (companies: CompanyDto[]) => void; // Guarda el array completo
  addCompany: (company: CompanyDto) => void; // Agrega una compañía al array
}

export const useCompanyStore = create<CompanyState>((set) => ({
  companies: [],
  setCompanies: (companies) => set({ companies }),
  addCompany: (company) =>
    set((state) => ({ companies: [...state.companies, company] })),
}));

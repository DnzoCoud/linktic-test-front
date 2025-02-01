import apiInstance from "@/axios";
import { CompanyDto, StoreCompanyDto } from "@/models/company";
import { useCompanyStore } from "@/stores/useCompanyStore";
import { useState } from "react";

const fetchCompanies = async (): Promise<CompanyDto[]> => {
  const response = await apiInstance.get("/companies");
  return response.data;
};

const saveCompany = async (company: StoreCompanyDto): Promise<CompanyDto> => {
  const response = await apiInstance.post("/companies", company);
  return response.data;
};

export const useCompany = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { setCompanies } = useCompanyStore();

  const findCompanies = async () => {
    setIsLoading(true);
    try {
      const response = await fetchCompanies();
      setCompanies(response);
    } catch (err) {
      setError("Error al obtener compañías");
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, saveCompany, findCompanies };
};

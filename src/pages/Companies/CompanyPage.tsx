import HeaderPage from "@/components/layout/HeaderPage";
import { RiBuilding2Line } from "react-icons/ri";
import { CompanyDatatable } from "./components/CompanyDatatable";
import { useCompany } from "@/hooks/useCompany";
import { useCompanyStore } from "@/stores/useCompanyStore";
import { useEffect } from "react";

export default function CompanyPage() {
  const { findCompanies } = useCompany();
  const { companies } = useCompanyStore();
  useEffect(() => {
    findCompanies();
  }, []);
  return (
    <div className="w-full flex flex-col items-start justify-start">
      <HeaderPage
        title="Empresas"
        description="Toda la informacion de las empresas en el sistema"
        icon={<RiBuilding2Line className="text-white" />}
      />
      <CompanyDatatable companies={companies} />
    </div>
  );
}

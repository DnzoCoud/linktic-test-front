import { CompanyDto } from "./company";

export interface ProductDto {
  code: string;
  name: string;
  features: string;
  company: CompanyDto;
}

export interface StoreProductDto {
  code: string;
  name: string;
  features: string;
  companyNit: string;
}

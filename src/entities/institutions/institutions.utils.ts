import { InstitutionData, InstitutionType } from "./Institution";

export const createEmptyInstitution = (): InstitutionData => {
  return {
    name: "",
    description: "",
    country: "UKR",
    city: null,
    type: InstitutionType.government,
    logoUrl: null,
  };
};

export const typesColorMap = new Map<
  InstitutionType,
  "default" | "warning" | "success" | "primary" | "secondary" | "danger"
>([
  [InstitutionType.education, "default"],
  [InstitutionType.government, "warning"],
  [InstitutionType.privateBusiness, "success"],
  [InstitutionType.stateCompany, "primary"],
]);

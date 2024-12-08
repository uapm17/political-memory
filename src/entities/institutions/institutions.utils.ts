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

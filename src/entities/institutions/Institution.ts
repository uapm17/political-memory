export enum InstitutionType {
  education = "education",
  privateBusiness = "privateBusiness",
  stateCompany = "stateCompany",
  government = "government",
}

export type Institution = {
  id: string;
  name: string;
  country: string;
  city: string | null;
  type: InstitutionType;
};

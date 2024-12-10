export enum InstitutionType {
  education = "education",
  privateBusiness = "privateBusiness",
  stateCompany = "stateCompany",
  government = "government",
}

export type InstitutionData = {
  name: string;
  description: string;
  websiteUrl: string | null;
  country: string;
  city: string | null;
  type: InstitutionType;
  logoUrl: string | null;
};

export type Institution = InstitutionData & {
  id: string;
};

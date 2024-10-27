import { Institution, InstitutionType } from "./Institution";

export const presidentOffice: Institution = {
  id: "613b4738-1ac1-4ced-b745-229b6516f2fc",
  name: "Офіс президента",
  country: "UA",
  city: null,
  type: InstitutionType.government,
};

export const institutionsList: Institution[] = [presidentOffice];

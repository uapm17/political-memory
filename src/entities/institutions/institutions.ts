import { Institution, InstitutionType } from "./Institution";

export const presidentOffice: Institution = {
  id: "613b4738-1ac1-4ced-b745-229b6516f2fc",
  name: "Офіс президента",
  country: "UA",
  city: null,
  type: InstitutionType.government,
};

export const knuShevchenka: Institution = {
  id: "b2385521-63f6-4a16-a221-05dc3c9f9b7c",
  name: "КНУ імені Тараса Шевченка",
  country: "UA",
  city: "Kyiv",
  type: InstitutionType.education,
};

export const bersAndCo: Institution = {
  id: "63c9a6b3-968c-48e7-b374-1002ef80039c",
  name: "ЗАТ «Юридична служба «Б. Е. Р. С. і партнери",
  country: "UA",
  city: null,
  type: InstitutionType.privateBusiness,
};

export const nationalInvestmentCouncil: Institution = {
  id: "74c60570-6fa7-4235-ae65-63d138f5d199",
  name: "Національна інвестиційна рада",
  country: "UA",
  city: null,
  type: InstitutionType.government,
};

export const nationalConcernUkroboronprom: Institution = {
  id: "78c6d2cf-d724-48ef-a661-d44c8289f50e",
  name: "Державний концерн «Укроборонпром»",
  country: "UA",
  city: null,
  type: InstitutionType.government,
};

export const institutionsList: Institution[] = [
  presidentOffice,
  knuShevchenka,
  bersAndCo,
  nationalInvestmentCouncil,
  nationalConcernUkroboronprom,
];

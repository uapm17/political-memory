import { Institution, InstitutionType } from "./Institution";

/* Goverment */
export const presidentOffice: Institution = {
  id: "613b4738-1ac1-4ced-b745-229b6516f2fc",
  name: "Офіс президента",
  country: "UA",
  city: null,
  type: InstitutionType.government,
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

/* Education */
export const knuShevchenka: Institution = {
  id: "b2385521-63f6-4a16-a221-05dc3c9f9b7c",
  name: "КНУ імені Тараса Шевченка",
  country: "UA",
  city: "Kyiv",
  type: InstitutionType.education,
};

export const kneuVadumaGetmana: Institution = {
  id: "eb4344f7-90f3-489f-a138-67fd1dbcd090",
  name: "КНЕУ імені Вадима Гетьмана",
  country: "UA",
  city: "Kyiv",
  type: InstitutionType.education,
};

/* Private businesses */
export const bersAndCo: Institution = {
  id: "63c9a6b3-968c-48e7-b374-1002ef80039c",
  name: "ЗАТ «Юридична служба «Б. Е. Р. С. і партнери",
  country: "UA",
  city: null,
  type: InstitutionType.privateBusiness,
};

export const kvk: Institution = {
  id: "f8acf468-415c-46b9-88c8-d5844f55450f",
  name: "КВК",
  country: "UA",
  city: null,
  type: InstitutionType.privateBusiness,
};

export const kvartal95: Institution = {
  id: "413ab401-6b23-4aed-b374-3828674d6984",
  name: "ТОВ «Студія «Квартал 95»",
  country: "UA",
  city: null,
  type: InstitutionType.privateBusiness,
};

export const telekanalInter: Institution = {
  id: "09670ecd-525f-4ed8-a702-37cc5b10ddfc",
  name: "«Телеканал «Інтер»",
  country: "UA",
  city: null,
  type: InstitutionType.privateBusiness,
};

export const ligaSmihu: Institution = {
  id: "983ee15e-20c2-4cee-8160-7c4568636088",
  name: "ГО «Молодіжний центр «Ліга сміху»",
  country: "UA",
  city: null,
  type: InstitutionType.privateBusiness,
};

export const institutionsList: Institution[] = [
  /* Goverment */
  presidentOffice,
  nationalInvestmentCouncil,
  nationalConcernUkroboronprom,
  /* Education */
  knuShevchenka,
  kneuVadumaGetmana,
  /* Private businesses */
  bersAndCo,
  kvk,
  kvartal95,
  telekanalInter,
  ligaSmihu,
];

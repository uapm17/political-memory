import { Institution, InstitutionType } from "./Institution";

/* Goverment */
export const presidentOffice: Institution = {
  id: "613b4738-1ac1-4ced-b745-229b6516f2fc",
  name: "Офіс президента",
  country: "UA",
  city: 'Kyiv',
  type: InstitutionType.government,
};

export const presidentAdministration: Institution = {
  id: "fe4654ce-6d30-4ab0-b23a-8909946caf0c",
  name: "Адміністрація Президента України",
  country: "UA",
  city: 'Kyiv',
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

export const parliamentApparat: Institution = {
  id: "bd993b2d-0a84-4342-94a1-365f0b06dc04",
  name: "Апарат Верховної Ради України»",
  country: "UA",
  city: 'Kyiv',
  type: InstitutionType.government,
};

export const embassyItaly: Institution = {
  id: "b651af32-8d69-433f-8695-fa7e7e0fafae",
  name: "Посольство України в Італійській Республіці",
  country: "UA",
  city: null,
  type: InstitutionType.government,
};

export const oschadBank: Institution = {
  id: "00262b9c-4e91-497e-a444-341e2ea9a6a1",
  name: "АТ «Ощадбанк»",
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

export const ukrAcademyExternalTrading: Institution = {
  id: "f29cf37e-4ef0-4772-9ca4-80ef7e29336b",
  name: "Українська академія зовнішньої торгівлі",
  country: "UA",
  city: "Kyiv",
  type: InstitutionType.education,
};

export const charteredInstituteOfMarketing: Institution = {
  id: "82feb2a4-ca0c-4e8f-a5dc-2fec5cbe3200",
  name: "Chartered Institute of Marketing",
  country: "UK",
  city: "Berkshire",
  type: InstitutionType.education,
};

export const kyivStateAcademyOfBuildingAndArchitecture: Institution = {
  id: "f2b5fccf-815a-414b-a01e-7d0414b007ac",
  name: "Київська державна академія будівництва та архітектури",
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

export const macdonaldsUkraine: Institution = {
  id: "6eb6e272-b06c-411e-b089-5c50fc29292e",
  name: "МакДональдз Україна",
  country: "UA",
  city: null,
  type: InstitutionType.privateBusiness,
};

export const metroGroup: Institution = {
  id: "714c3acd-60ff-4c3b-8a2c-681f8145616d",
  name: "METRO Group",
  country: "UA",
  city: null,
  type: InstitutionType.privateBusiness,
};

export const farmastore: Institution = {
  id: "808b56ff-34d8-412a-955a-0b6e9986491f",
  name: "Farmastore",
  country: "UA",
  city: null,
  type: InstitutionType.privateBusiness,
};

export const bankRenesansKredyt: Institution = {
  id: "1768ddb7-baa3-4fb4-93bc-8a6b25e65a46",
  name: "АТ «Банк Ренесанс Кредит»",
  country: "UA",
  city: null,
  type: InstitutionType.privateBusiness,
};

export const sosDutiachiMistechka: Institution = {
  id: "1b0a9878-74e4-473b-af72-f2ed8fbb3cca",
  name: "СОС Дитячі Містечка",
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
  ukrAcademyExternalTrading,
  /* Private businesses */
  bersAndCo,
  kvk,
  kvartal95,
  telekanalInter,
  ligaSmihu,
];

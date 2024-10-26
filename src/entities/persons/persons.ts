import { Person } from "./Person";

export const persons: Person[] = [
  {
    id: "0edc78f0-470b-489e-b851-83b2aeaaf307",
    firstName: "Володимир",
    lastName: "Зеленський",
    birthDate: new Date(1978, 0, 25),
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%97%D0%B5%D0%BB%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_%2831-12-2023%29.jpg/500px-%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%97%D0%B5%D0%BB%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_%2831-12-2023%29.jpg",
    education: [],
    jobHistory: [
      {
        start: new Date(2019, 4, 20),
        end: null,
        position: "Президент",
        institutionId: "613b4738-1ac1-4ced-b745-229b6516f2fc",
        description: "",
        actions: [],
      },
    ],
    declarations: [],
    partyMembership: [],
    businesses: [],
    actions: [],
    investigations: [],
    family: [],
    criminalRecords: [],
  },
];

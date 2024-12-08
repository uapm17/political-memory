import { PersonData } from "./Person";

export const createEmptyPerson = (): PersonData => {
  return {
    firstName: "",
    lastName: "",
    birthDate: new Date(),
    email: null,
    website: null,
    photoUrl: null,
    education: [],
    jobHistory: [],
    declarations: [],
    partyMembership: [],
    businesses: [],
    actions: [],
    investigations: [],
    family: [],
    criminalRecords: [],
  };
};

import personActionTypes from "./persons.actionTypes";
import { Person, PersonData } from "./Person";

export const requestPerson = ({ personId }: { personId: string }) => ({
  type: personActionTypes.REQUEST_PERSON_DATA,
  personId,
});

export const requestPersonsList = () => ({
  type: personActionTypes.REQUEST_PERSONS_LIST,
});

export const personsListReceived = (personsList: Person[]) => ({
  type: personActionTypes.PERSONS_LIST_RECEIVED,
  personsList,
});

export const setPerson = (person: Person | null) => ({
  type: personActionTypes.PERSON_DATA_RECEIVED,
  person,
});

export const createPersonAction = (personData: PersonData) => ({
  type: personActionTypes.CREATE_PERSON,
  personData,
});

export const clearPerson = () => ({
  type: personActionTypes.CLEAR_PERSON_DATA,
});

export const updatePerson = ({
  personId,
  personData,
}: {
  personId: string;
  personData: PersonData;
}) => ({
  type: personActionTypes.UPDATE_PERSON_DATA,
  personId,
  personData,
});

import personActionTypes from "./persons.actionTypes";
import { Person } from "./Person";

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

export const createPersonAction = (person: Person) => ({
  type: personActionTypes.CREATE_PERSON,
  person,
});

export const clearPerson = () => ({
  type: personActionTypes.CLEAR_PERSON_DATA,
});

export const updatePerson = ({
  personId,
  person,
}: {
  personId: string;
  person: Person;
}) => ({
  type: personActionTypes.UPDATE_PERSON_DATA,
  personId,
  person,
});

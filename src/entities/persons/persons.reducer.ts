import _keyBy from "lodash/keyBy";
import _omit from "lodash/omit";
import { Person } from "./Person";
import personsActionTypes from "./persons.actionTypes";

export type PersonsState = {
  personsHash: Record<string, Person>;
};

const initialState: PersonsState = {
  personsHash: {},
};

const persons = (state: PersonsState = initialState, action: any) => {
  switch (action.type) {
    case personsActionTypes.PERSON_DATA_RECEIVED:
      return {
        ...state,
        personsHash: {
          ...state.personsHash,
          [action.person.id]: {
            ...action.person,
          },
        },
      };
    case personsActionTypes.CLEAR_PERSON_DATA:
      return {
        ...state,
        personsHash: { ..._omit(state.personsHash, action.personId) },
      };
    case personsActionTypes.PERSONS_LIST_RECEIVED:
      return {
        ...state,
        personsHash: {
          ...state.personsHash,
          ..._keyBy(action.personsList, "id"),
        },
      };
    default:
      return state;
  }
};

export default persons;

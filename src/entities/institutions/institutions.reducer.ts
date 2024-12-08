import _keyBy from "lodash/keyBy";
import _omit from "lodash/omit";
import { Institution } from "./Institution";
import institutionActionTypes from "./institutions.actionTypes";

export type InstitutionsState = {
  institutionsHash: Record<string, Institution>;
};

const initialState: InstitutionsState = {
  institutionsHash: {},
};

const institution = (state: InstitutionsState = initialState, action: any) => {
  switch (action.type) {
    case institutionActionTypes.INSTITUTION_DATA_RECEIVED:
      return {
        ...state,
        institutionsHash: {
          ...state.institutionsHash,
          [action.institution.id]: {
            ...action.institution,
          },
        },
      };
    case institutionActionTypes.CLEAR_INSTITUTION_DATA:
      return {
        ...state,
        institutionsHash: { ..._omit(state.institutionsHash, action.InstitutionId) },
      };
    case institutionActionTypes.INSTITUTIONS_LIST_RECEIVED:
      return {
        ...state,
        institutionsHash: {
          ...state.institutionsHash,
          ..._keyBy(action.institutionsList, "id"),
        },
      };
    default:
      return state;
  }
};

export default institution;

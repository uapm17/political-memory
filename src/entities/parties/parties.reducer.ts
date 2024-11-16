import _keyBy from "lodash/keyBy";
import _omit from "lodash/omit";
import { Party } from "./Party";
import partiesActionTypes from "./parties.actionTypes";

export type PartysState = {
  partiesHash: Record<string, Party>;
};

const initialState: PartysState = {
  partiesHash: {},
};

const parties = (state: PartysState = initialState, action: any) => {
  switch (action.type) {
    case partiesActionTypes.PARTY_DATA_RECEIVED:
      return {
        ...state,
        partiesHash: {
          ...state.partiesHash,
          [action.person.id]: {
            ...action.person,
          },
        },
      };
    case partiesActionTypes.CLEAR_PARTY_DATA:
      return {
        ...state,
        partiesHash: { ..._omit(state.partiesHash, action.personId) },
      };
    case partiesActionTypes.PARTIES_LIST_RECEIVED:
      return {
        ...state,
        partiesHash: {
          ...state.partiesHash,
          ..._keyBy(action.partiesList, "id"),
        },
      };
    default:
      return state;
  }
};

export default parties;

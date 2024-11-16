import partiesActionTypes from "./parties.actionTypes";
import { Party } from "./Party";

export const requestParty = ({ partyId }: { partyId: string }) => ({
  type: partiesActionTypes.REQUEST_PARTY_DATA,
  partyId,
});

export const setParty = (party: Party | null) => ({
  type: partiesActionTypes.PARTY_DATA_RECEIVED,
  party,
});

export const createPartyAction = (party: Party) => ({
  type: partiesActionTypes.CREATE_PARTY,
  party,
});

export const clearParty = () => ({
  type: partiesActionTypes.CLEAR_PARTY_DATA,
});

export const updateParty = ({
  partyId,
  party,
}: {
  partyId: string;
  party: Party;
}) => ({
  type: partiesActionTypes.UPDATE_PARTY_DATA,
  partyId,
  party,
});

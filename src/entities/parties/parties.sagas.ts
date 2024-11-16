import { takeLatest, all, put, call } from "redux-saga/effects";
import partyActionTypes from "./parties.actionTypes";
import {
  setParty,
  updateParty,
  requestParty,
  createPartyAction,
} from "./parties.actions";
import { Party } from "./Party";
import { createParty, fetchPartyById } from "@/src/gateways/parties.gateway";

export function* createPartySaga({
  party,
}: ReturnType<typeof createPartyAction>) {
  try {
    yield call(createParty, { party });
  } catch (e: any) {
    throw new Error(e);
  }
}

export function* fetchPartySaga({ partyId }: ReturnType<typeof requestParty>) {
  try {
    const partyData: Party = yield call(fetchPartyById, { partyId });
    yield put(setParty(partyData));
  } catch (e: any) {
    throw new Error(e);
  }
}

export function* updatePartySaga({
  partyId,
  party,
}: ReturnType<typeof updateParty>) {
  try {
    yield call(updateParty, {
      partyId,
      party,
    });
    yield put(requestParty({ partyId }));
  } catch (e: any) {
    throw new Error(e);
  }
}

function* partySaga() {
  yield all([
    takeLatest(partyActionTypes.REQUEST_PARTY_DATA, fetchPartySaga),
    takeLatest(partyActionTypes.UPDATE_PARTY_DATA, updatePartySaga),
    takeLatest(partyActionTypes.CREATE_PARTY, createPartySaga),
  ]);
}

export default partySaga;

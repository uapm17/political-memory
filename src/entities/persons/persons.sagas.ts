import { takeLatest, all, put, call } from "redux-saga/effects";
import personActionTypes from "./persons.actionTypes";
import {
  setPerson,
  updatePerson,
  requestPerson,
  createPersonAction,
} from "./persons.actions";
import { Person } from "./Person";
import {
  createPerson,
  fetchPersonById,
  updatePersonSkills,
} from "@/src/gateways/persons.gateway";

export function* createPersonSaga({
  person,
}: ReturnType<typeof createPersonAction>) {
  try {
    yield call(createPerson, { person });
  } catch (e: any) {
    throw new Error(e);
  }
}

export function* fetchPersonSaga({
  personId,
}: ReturnType<typeof requestPerson>) {
  try {
    const personData: Person = yield call(fetchPersonById, { personId });
    yield put(setPerson(personData));
  } catch (e: any) {
    throw new Error(e);
  }
}

export function* updatePersonSaga({
  personId,
  person,
}: ReturnType<typeof updatePerson>) {
  try {
    yield call(updatePersonSkills, {
      personId,
      person,
    });
    yield put(requestPerson({ personId }));
  } catch (e: any) {
    throw new Error(e);
  }
}

function* personSaga() {
  yield all([
    takeLatest(personActionTypes.REQUEST_PERSON_DATA, fetchPersonSaga),
    takeLatest(personActionTypes.UPDATE_PERSON_DATA, updatePersonSaga),
    takeLatest(personActionTypes.CREATE_PERSON, createPersonSaga),
  ]);
}

export default personSaga;

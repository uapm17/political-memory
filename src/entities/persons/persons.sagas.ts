import { takeLatest, all, put, call } from "redux-saga/effects";
import personActionTypes from "./persons.actionTypes";
import {
  setPerson,
  requestPerson,
  createPersonAction,
  personsListReceived,
  updatePersonAction,
} from "./persons.actions";
import { Person } from "./Person";
import {
  createPerson,
  fetchPersonById,
  fetchPersonsList,
  editPerson,
} from "@/src/gateways/persons.gateway";

export function* createPersonSaga({
  personData,
}: ReturnType<typeof createPersonAction>) {
  try {
    yield call(createPerson, { personData });
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

export function* fetchPersonsListSaga() {
  try {
    const personsList: Person[] = yield call(fetchPersonsList);
    yield put(personsListReceived(personsList));
  } catch (e: any) {
    throw new Error(e);
  }
}

export function* updatePersonSaga({
  personId,
  personData,
}: ReturnType<typeof updatePersonAction>) {
  try {
    yield call(editPerson, {
      personId,
      personData,
    });
    yield put(requestPerson({ personId }));
  } catch (e: any) {
    throw new Error(e);
  }
}

function* personSaga() {
  yield all([
    takeLatest(personActionTypes.REQUEST_PERSON_DATA, fetchPersonSaga),
    takeLatest(personActionTypes.REQUEST_PERSONS_LIST, fetchPersonsListSaga),
    takeLatest(personActionTypes.CREATE_PERSON, createPersonSaga),
    takeLatest(personActionTypes.UPDATE_PERSON_DATA, updatePersonSaga),
  ]);
}

export default personSaga;

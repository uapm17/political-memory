import { takeLatest, all, put, call } from "redux-saga/effects";
import institutionsActionTypes from "./institutions.actionTypes";
import {
  setInstitution,
  updateInstitution,
  requestInstitution,
  createInstitutionAction,
} from "./institutions.actions";
import { Institution } from "./Institution";
import {
  createInstitution,
  fetchInstitutionById,
} from "@/src/gateways/institutions.gateway";

export function* createInstitutionSaga({
  institution,
}: ReturnType<typeof createInstitutionAction>) {
  try {
    yield call(createInstitution, { institution });
  } catch (e: any) {
    throw new Error(e);
  }
}

export function* fetchInstitutionSaga({
  institutionId,
}: ReturnType<typeof requestInstitution>) {
  try {
    const institutionData: Institution = yield call(fetchInstitutionById, {
      institutionId,
    });
    yield put(setInstitution(institutionData));
  } catch (e: any) {
    throw new Error(e);
  }
}

export function* updateInstitutionSaga({
  institutionId,
  institution,
}: ReturnType<typeof updateInstitution>) {
  try {
    yield call(updateInstitution, {
      institutionId,
      institution,
    });
    yield put(requestInstitution({ institutionId }));
  } catch (e: any) {
    throw new Error(e);
  }
}

function* institutionsSaga() {
  yield all([
    takeLatest(
      institutionsActionTypes.REQUEST_INSTITUTION_DATA,
      fetchInstitutionSaga
    ),
    takeLatest(
      institutionsActionTypes.UPDATE_INSTITUTION_DATA,
      updateInstitutionSaga
    ),
    takeLatest(
      institutionsActionTypes.CREATE_INSTITUTION,
      createInstitutionSaga
    ),
  ]);
}

export default institutionsSaga;

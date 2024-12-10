import { takeLatest, all, put, call } from "redux-saga/effects";
import institutionsActionTypes from "./institutions.actionTypes";
import {
  setInstitution,
  updateInstitution as updateInstitutionAction,
  requestInstitution,
  createInstitutionAction,
  institutionsListReceived,
} from "./institutions.actions";
import { Institution } from "./Institution";
import {
  createInstitution,
  editInstitution,
  fetchInstitutionById,
  fetchInstitutionsList,
} from "@/src/gateways/institutions.gateway";

export function* createInstitutionSaga({
  institutionData,
}: ReturnType<typeof createInstitutionAction>) {
  try {
    yield call(createInstitution, { institutionData });
  } catch (e: any) {
    throw new Error(e);
  }
}

export function* fetchInstitutionSaga({
  institutionId,
}: ReturnType<typeof requestInstitution>) {
  try {
    const institution: Institution = yield call(fetchInstitutionById, {
      institutionId,
    });
    if (institution) {
      yield put(setInstitution(institution));
    }
  } catch (e: any) {
    throw new Error(e);
  }
}

export function* fetchInstitutionsListSaga() {
  try {
    const institutionsList: Institution[] = yield call(fetchInstitutionsList);
    yield put(institutionsListReceived(institutionsList));
  } catch (e: any) {
    throw new Error(e);
  }
}

export function* updateInstitutionSaga({
  institutionId,
  institutionData,
}: ReturnType<typeof updateInstitutionAction>) {
  try {
    yield call(editInstitution, {
      institutionId,
      institutionData,
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
      institutionsActionTypes.REQUEST_INSTITUTIONS_LIST,
      fetchInstitutionsListSaga
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

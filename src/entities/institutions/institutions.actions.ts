import institutionsActionTypes from "./institutions.actionTypes";
import { Institution, InstitutionData } from "./Institution";

export const requestInstitution = ({
  institutionId,
}: {
  institutionId: string;
}) => ({
  type: institutionsActionTypes.REQUEST_INSTITUTION_DATA,
  institutionId,
});

export const requestInstitutionsList = () => ({
  type: institutionsActionTypes.REQUEST_INSTITUTIONS_LIST,
});

export const institutionsListReceived = (institutionsList: Institution[]) => ({
  type: institutionsActionTypes.INSTITUTIONS_LIST_RECEIVED,
  institutionsList,
});

export const setInstitution = (institution: Institution | null) => ({
  type: institutionsActionTypes.INSTITUTION_DATA_RECEIVED,
  institution,
});

export const createInstitutionAction = (institution: Institution) => ({
  type: institutionsActionTypes.CREATE_INSTITUTION,
  institution,
});

export const clearInstitution = () => ({
  type: institutionsActionTypes.CLEAR_INSTITUTION_DATA,
});

export const updateInstitution = ({
  institutionId,
  institutionData,
}: {
  institutionId: string;
  institutionData: InstitutionData;
}) => ({
  type: institutionsActionTypes.UPDATE_INSTITUTION_DATA,
  institutionId,
  institutionData,
});

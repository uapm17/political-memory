import institutionsActionTypes from "./institutions.actionTypes";
import { Institution } from "./Institution";

export const requestInstitution = ({ institutionId }: { institutionId: string }) => ({
  type: institutionsActionTypes.REQUEST_INSTITUTION_DATA,
  institutionId,
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
  institution,
}: {
  institutionId: string;
  institution: Institution;
}) => ({
  type: institutionsActionTypes.UPDATE_INSTITUTION_DATA,
  institutionId,
  institution,
});

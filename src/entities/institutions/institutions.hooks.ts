import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/src/hooks";
import {
  requestInstitution,
  requestInstitutionsList,
  updateInstitution,
} from "./institutions.actions";
import {
  institutionSelector,
  institutionsListSelector,
} from "./institutions.selectors";
import { AppStore, RootState } from "@/src/store";
import { InstitutionData } from "./Institution";
import { update } from "lodash";

export const useInstitutions = () => {
  const dispatch = useAppDispatch();
  const institutions = useAppSelector(institutionsListSelector);

  useEffect(() => {
    if (institutions.length === 0) {
      dispatch(requestInstitutionsList());
    }
  }, []);

  const institutionsMap = new Map(
    institutions.map((record) => [record.id, record])
  );

  return { institutionsMap, institutions };
};

export const useInstitution = (institutionId: string) => {
  const dispatch = useAppDispatch();
  const institution = useAppSelector((state: RootState) =>
    institutionSelector(state, { institutionId })
  );

  useEffect(() => {
    if (!institution) {
      dispatch(requestInstitution({ institutionId }));
    }
  }, [institution, institutionId]);

  const handleChange = useCallback(
    (institutionData: InstitutionData, institutionId: string) => {
      dispatch(updateInstitution({ institutionData, institutionId }));
    },
    []
  );

  return { institution, onUpdate: handleChange };
};

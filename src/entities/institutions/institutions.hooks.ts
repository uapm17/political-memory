import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/src/hooks";
import { requestInstitutionsList } from "./institutions.actions";
import { institutionsListSelector } from "./institutions.selectors";

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

  return { institutionsMap };
};

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/src/hooks";
import { requestPersonsList } from "./persons.actions";
import { personsListSelector } from "./persons.selectors";

export const usePersons = () => {
  const dispatch = useAppDispatch();
  const persons = useAppSelector(personsListSelector);

  useEffect(() => {
    if (persons.length === 0) {
      dispatch(requestPersonsList());
    }
  }, []);

  return { persons };
};

import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/src/hooks";
import { requestPerson, requestPersonsList, updatePerson } from "./persons.actions";
import { personSelector, personsListSelector } from "./persons.selectors";
import { RootState } from "@/src/store";
import { PersonData } from "./Person";

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

export const usePerson = (personId: string) => {
  const dispatch = useAppDispatch();
  const person = useAppSelector((state: RootState) =>
    personSelector(state, { personId })
  );

  useEffect(() => {
    if (!person) {
      dispatch(requestPerson({ personId }));
    }
  }, [person, personId]);

  const handleChange = useCallback(
    (personData: PersonData, personId: string) => {
      dispatch(updatePerson({ personData, personId }));
    },
    []
  );

  return { person, onUpdate: handleChange };
};

import { RootState } from "@/src/store";
import { createSelector } from "@reduxjs/toolkit";
import { Person } from "./Person";

export const personsHashSelector = (state: RootState) =>
  state.persons.personsHash;

export const personsListSelector = createSelector(
  personsHashSelector,
  (personsHash) => {
    return Object.values(personsHash) as Person[];
  }
);

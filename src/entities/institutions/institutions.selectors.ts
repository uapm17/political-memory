import { RootState } from "@/src/store";
import { createSelector } from "@reduxjs/toolkit";
import { Institution } from "./Institution";

export const institutionsHashSelector = (state: RootState) =>
  state.institutions.institutionsHash;

export const institutionsListSelector = createSelector(
  institutionsHashSelector,
  (institutionsHash) => {
    return Object.values(institutionsHash) as Institution[];
  }
);

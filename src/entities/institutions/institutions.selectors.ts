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

export const institutionSelector = createSelector(
  institutionsHashSelector,
  (_: RootState, { institutionId }: { institutionId: string }) => institutionId,
  (institutionsHash, institutionId) => {
    return institutionsHash[institutionId] as Institution | undefined;
  }
);

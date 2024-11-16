import { RootState } from "@/src/store";

export const institutionsHashSelector = (state: RootState) =>
  state.institutions.institutionsHash;

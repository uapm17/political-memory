import { RootState } from "@/src/store";

export const personsHashSelector = (state: RootState) =>
  state.persons.personsHash;

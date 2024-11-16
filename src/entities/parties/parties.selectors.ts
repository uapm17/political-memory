import { RootState } from "@/src/store";

export const partiesHashSelector = (state: RootState) =>
  state.parties.partiesHash;

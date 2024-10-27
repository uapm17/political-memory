import { Action } from "../actions/Action";

export type Party = {
  id: string;
  name: string;
  description: string;
  start: Date;
  end: Date | null;
  actions: Action[];
};

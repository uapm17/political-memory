import { ExternalLink } from "@/types";
import { Action } from "../actions/Action";

export enum PartyStatus {
  active = "active",
  closed = "closed",
  forbidden = "forbidden",
}

export type Party = {
  id: string;
  name: string;
  logoUrl: string;
  description: string;
  start: Date;
  end: Date | null;
  actions: Action[];
  website: ExternalLink;
  links: ExternalLink[];
  status: PartyStatus;
};

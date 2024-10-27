import { ExternalLink } from "@/types";
import { Action } from "../actions/Action";
import { Institution } from "../institutions/Institution";

export enum Degree {
  master = "master",
  bachelor = "bachelor",
}

type EducationRecord = {
  start: Date;
  end: Date;
  degree: Degree | null;
  institutionId: string; // Institution
  description: string;
  actions: Action[];
};

type Job = {
  start: Date;
  end: Date | null;
  position: string;
  institutionId: string | null; // Institution
  description: string;
  actions: Action[];
};

type Declaration = {
  url: string;
  title: string;
  year: number;
  totalIncome: number;
  totalAssets: number;
};

type PartyMembershipRecord = {
  start: Date;
  end: Date;
  position: string;
  partyId: string;
  actions: Action[];
};

type BusinessRecord = {
  start: Date;
  end: Date;
  institution: Institution;
  position: string;
  actions: Action[];
  companions: string[];
};

type Investigation = {
  references: Reference[];
  author: Institution;
  description: string;
  start: Date;
  end: Date;
  result: string;
};

type Reference = {
  url: string;
  title: string;
  date: Date;
  author: Institution;
};

type CriminalRecord = {
  title: string;
  judjes: string[]; // Person
  start: Date;
  end: Date;
  description: string;
  fine: number;
  companions: string[]; // Person;
};

enum Relation {
  children = "children",
  wife = "wife",
  parent = "parent",
  sibling = "sibling",
  cousine = "cousine",
  lover = "lover",
}

type FamilyMember = {
  personId: string;
  relation: Relation;
  description: string;
};

export type Person = {
  id: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  email: string | null;
  website: ExternalLink | null;
  photoUrl: string;
  education: EducationRecord[];
  jobHistory: Job[];
  declarations: Declaration[];
  partyMembership: PartyMembershipRecord[];
  businesses: BusinessRecord[];
  actions: Action[];
  investigations: Investigation[];
  family: FamilyMember[];
  criminalRecords: CriminalRecord[];
};

import { ExternalLink } from "@/types";
import { Action } from "../actions/Action";
import { Institution } from "../institutions/Institution";

export enum Degree {
  master = "master",
  bachelor = "bachelor",
  pd = "pd" /* Doctor of Philosophy */,
}

type EducationRecord = {
  start: Date | null;
  end: Date | null;
  degree: Degree | null;
  institutionId: string; // Institution
  description: string;
  actions: Action[];
};

export type JobDetails = {
  type: "uaDeputy";
  convocationNumber: number;
  choosenBy: string;
  party: string;
  listNumber: number;
  jobStart: Date;
  position: string;
  otherPositions: string[];
  generalInfo: string;
  links: Record<string, string>;
  fullTimeAssistants: string[];
  volonteerAssistants: string[];
};

export type Job = {
  start: Date | null;
  end: Date | null;
  position: string;
  institutionId: string | null; // Institution
  description: string;
  actions: Action[];
  details: JobDetails;
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

export type VideoRecordData = {
  video: ExternalLink;
  tags: string[];
  date: Date;
};

export type VideoRecord = VideoRecordData & {
  id: string;
};

export type PersonData = {
  firstName: string;
  lastName: string;
  birthDate: Date;
  email: string | null;
  website: ExternalLink | null;
  photoUrl: string | null;
  education: EducationRecord[];
  jobHistory: Job[];
  declarations: Declaration[];
  partyMembership: PartyMembershipRecord[];
  businesses: BusinessRecord[];
  actions: Action[];
  investigations: Investigation[];
  family: FamilyMember[];
  criminalRecords: CriminalRecord[];
  videos: VideoRecord[];
};

export type Person = PersonData & {
  id: string;
};

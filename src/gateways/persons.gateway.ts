import { httpsCallable } from "firebase/functions";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { handleCollectionSnapshot, handleDocumentSnapshot } from "./utils";
import { db, functions } from "../common/firebase";
import { Person } from "../entities/persons/Person";

export const getPersonDocPath = (personId: string) => {
  return `persons/${personId}`;
};

export const getPersonUpdatesCollectionPath = (personId: string) => {
  return `persons/${personId}/personUpdates`;
};

export const getPersonUpdatesCollectionRef = (personId: string) => {
  return collection(db, getPersonUpdatesCollectionPath(personId));
};

export const getPersonDocRef = (personId: string) => {
  return doc(db, `persons/${personId}`);
};

export const getPersonSkillsDocPath = (personId: string) => {
  return `persons/${personId}/metadata/skills`;
};

export const getPersonSkillsDocRef = (personId: string) => {
  const docPath = getPersonSkillsDocPath(personId);

  return doc(db, docPath);
};

export const fetchPersonById = ({ personId }: { personId: string }) => {
  const personRef = getPersonDocRef(personId);

  return getDoc(personRef).then(handleDocumentSnapshot);
};

export const fetchPlayersList = ({ teamId }: { teamId: string }) => {
  const personsRef = collection(db, "persons");

  const q = query(personsRef, where(`teams.${teamId}.active`, "==", true));

  return getDocs(q).then(handleCollectionSnapshot);
};

export const createPerson = ({ person }: { person: Person }) => {
  const personsRef = collection(db, "persons");
  return addDoc(personsRef, person).then((doc) => doc.id);
};

export const editPerson = ({
  personId,
  person,
}: {
  personId: string;
  person: Person;
}) => {
  const personRef = doc(db, `persons/${personId}`);

  return updateDoc(personRef, person);
};

export const scrapTeamByExternalLink = httpsCallable(
  functions,
  "scrapTeamByExternalLink"
);

export const updatePersonSkills = httpsCallable(
  functions,
  "updatePersonSkillsV2"
);

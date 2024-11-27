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

export const getPersonDocRef = (personId: string) => {
  return doc(db, `persons/${personId}`);
};

export const fetchPersonById = ({ personId }: { personId: string }) => {
  const personRef = getPersonDocRef(personId);

  return getDoc(personRef).then(handleDocumentSnapshot);
};

export const fetchPersonsList = () => {
  const personsRef = collection(db, "persons");

  return getDocs(personsRef).then(handleCollectionSnapshot);
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

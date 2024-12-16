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
import { Person, PersonData } from "../entities/persons/Person";

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

export const createPerson = ({ personData }: { personData: PersonData }) => {
  const personsRef = collection(db, "persons");
  return addDoc(personsRef, personData).then((doc) => doc.id);
};

export const editPerson = ({
  personId,
  personData,
}: {
  personId: string;
  personData: PersonData;
}) => {
  const personRef = doc(db, `persons/${personId}`);

  return updateDoc(personRef, personData);
};

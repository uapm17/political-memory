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
import { db } from "../common/firebase";
import { Institution } from "../entities/institutions/Institution";

export const getInstitutionDocPath = (institutionId: string) => {
  return `institutions/${institutionId}`;
};

export const getInstitutionDocRef = (institutionId: string) => {
  return doc(db, `institutions/${institutionId}`);
};

export const fetchInstitutionById = ({
  institutionId,
}: {
  institutionId: string;
}) => {
  const institutionRef = getInstitutionDocRef(institutionId);

  return getDoc(institutionRef).then(handleDocumentSnapshot);
};

export const fetchInstitutionsList = () => {
  const institutionsRef = collection(db, "institutions");

  return getDocs(institutionsRef).then(handleCollectionSnapshot);
};

export const createInstitution = ({
  institution,
}: {
  institution: Institution;
}) => {
  const institutionsRef = collection(db, "institutions");
  return addDoc(institutionsRef, institution).then((doc) => doc.id);
};

export const editInstitution = ({
  institutionId,
  institution,
}: {
  institutionId: string;
  institution: Institution;
}) => {
  const institutionRef = doc(db, `institutions/${institutionId}`);

  return updateDoc(institutionRef, institution);
};

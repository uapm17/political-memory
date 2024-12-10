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
import {
  Institution,
  InstitutionData,
} from "../entities/institutions/Institution";

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
  institutionData,
}: {
  institutionData: InstitutionData;
}) => {
  const institutionsRef = collection(db, "institutions");
  return addDoc(institutionsRef, institutionData).then((doc) => doc.id);
};

export const editInstitution = ({
  institutionId,
  institutionData,
}: {
  institutionId: string;
  institutionData: InstitutionData;
}) => {
  const institutionRef = doc(db, `institutions/${institutionId}`);

  return updateDoc(institutionRef, institutionData);
};

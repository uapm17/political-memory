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
import { Party } from "../entities/parties/Party";

export const getPartyDocPath = (partyId: string) => {
  return `parties/${partyId}`;
};

export const getPartyDocRef = (partyId: string) => {
  return doc(db, `parties/${partyId}`);
};

export const fetchPartyById = ({ partyId }: { partyId: string }) => {
  const partyRef = getPartyDocRef(partyId);

  return getDoc(partyRef).then(handleDocumentSnapshot);
};

export const fetchPartiesList = ({ teamId }: { teamId: string }) => {
  const partiesRef = collection(db, "parties");

  const q = query(partiesRef, where(`teams.${teamId}.active`, "==", true));

  return getDocs(q).then(handleCollectionSnapshot);
};

export const createParty = ({ party }: { party: Party }) => {
  const partiesRef = collection(db, "parties");
  return addDoc(partiesRef, party).then((doc) => doc.id);
};

export const editParty = ({
  partyId,
  party,
}: {
  partyId: string;
  party: Party;
}) => {
  const partyRef = doc(db, `parties/${partyId}`);

  return updateDoc(partyRef, party);
};

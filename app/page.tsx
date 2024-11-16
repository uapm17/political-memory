"use client";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import MainStructure from "@/src/components/structure/MainStructure";
import { partiesList } from "@/src/entities/parties/parties";
import { createPartyAction } from "@/src/entities/parties/parties.actions";

export default function Home() {
  const dispatch = useDispatch();

  const handleCreate = useCallback(() => {
    partiesList.forEach((party) => {
      dispatch(createPartyAction(party));
    });
  }, []);

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <button onClick={handleCreate}>Go</button>
      <MainStructure />
    </section>
  );
}

"use client";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import MainStructure from "@/src/components/structure/MainStructure";
import { institutionsList } from "@/src/entities/institutions/institutions";
import { createInstitutionAction } from "@/src/entities/institutions/institutions.actions";

export default function Home() {
  const dispatch = useDispatch();

  const handleCreate = useCallback(() => {
    institutionsList.forEach((institution) => {
      dispatch(createInstitutionAction(institution));
    });
  }, []);

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <button onClick={handleCreate}>Go</button>
      <MainStructure />
    </section>
  );
}

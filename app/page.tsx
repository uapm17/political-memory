'use client'
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { persons } from "@/src/entities/persons/persons";
import MainStructure from "@/src/components/structure/MainStructure";
import { createPersonAction } from "@/src/entities/persons/persons.actions";

export default function Home() {
  const dispatch = useDispatch();

  const handleCreate = useCallback(() => {
    persons.forEach((person) => {
      dispatch(createPersonAction(person));
    });
  }, []);

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <button onClick={handleCreate}>Go</button>
      <MainStructure />
    </section>
  );
}

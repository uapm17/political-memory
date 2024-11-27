"use client";
import PersonsTable from "@/src/components/person/PersonsTable";
import { usePersons } from "@/src/entities/persons/persons.hooks";

export default function Persons() {
  const { persons } = usePersons();

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <PersonsTable persons={persons} />
    </section>
  );
}

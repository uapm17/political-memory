"use client";

import InstitutionsTable from "@/src/components/institutions/InstitutionsTable";
import { useInstitutions } from "@/src/entities/institutions/institutions.hooks";

export default function Persons() {
  const { institutions } = useInstitutions();

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <InstitutionsTable institutions={institutions} />
    </section>
  );
}

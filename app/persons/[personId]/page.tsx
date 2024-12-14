"use client";
import { Card } from "@nextui-org/react";
import { useParams } from "next/navigation";
import PersonCard from "@/src/components/person/PersonCard";
import { usePerson } from "@/src/entities/persons/persons.hooks";
import EditPersonBtn from "@/src/components/person/EditPersonBtn";
import { useInstitutions } from "@/src/entities/institutions/institutions.hooks";
import JobHistory from "@/src/components/person/JobHistory";

export default function PersonPage() {
  const { personId } = useParams();
  const { person } = usePerson(personId as string);
  const { institutionsMap } = useInstitutions();

  return (
    <section className="flex flex-col md:flex-row justify-center gap-4 py-8 md:py-10">
      <div className="w-full md:w-2/5">
        <PersonCard person={person} />
      </div>
      <div className="w-full md:w-3/5 flex items-start justify-start flex-col">
        <Card className="flex p-4 w-full mb-4">
          <EditPersonBtn personId={personId as string} className="ml-auto" />
        </Card>
        <JobHistory person={person} institutionsMap={institutionsMap} />
      </div>
    </section>
  );
}

"use client";
import { Card } from "@nextui-org/react";
import { useParams } from "next/navigation";
import PersonCard from "@/src/components/person/PersonCard";
import { usePerson } from "@/src/entities/persons/persons.hooks";
import EditPersonBtn from "@/src/components/person/EditPersonBtn";
import { useInstitutions } from "@/src/entities/institutions/institutions.hooks";
import JobHistory from "@/src/components/person/jobs/JobHistory";
import PersonVideos from "@/src/components/person/videos/PersonVideos";
import AddVideoBtn from "@/src/components/person/videos/AddVideoBtn";

export default function PersonPage() {
  const { personId } = useParams();
  const { person } = usePerson(personId as string);
  const { institutionsMap } = useInstitutions();

  return (
    <section className="flex flex-col md:flex-row justify-center gap-4 py-8 md:py-10">
      <div className="w-full md:w-2/5">
        <PersonCard person={person} className="mb-4" />
        <PersonVideos person={person} />
      </div>
      <div className="w-full md:w-3/5 flex items-start justify-start flex-col">
        <Card className="flex p-4 w-full mb-4 flex-row">
          <AddVideoBtn personId={personId as string} className="ml-auto" />
          <EditPersonBtn personId={personId as string} className="ml-4" />
        </Card>
        <JobHistory person={person} institutionsMap={institutionsMap} />
      </div>
    </section>
  );
}

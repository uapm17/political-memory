"use client";
import InstitutionCard from "@/src/components/institutions/InstitutionCard";
import EditInstitutionBtn from "@/src/components/institutions/EditInstitutionBtn";
import { useInstitution } from "@/src/entities/institutions/institutions.hooks";
import { useParams } from "next/navigation";
import { Card } from "@nextui-org/react";

export default function InstitutionPage() {
  const { institutionId } = useParams();
  const { institution } = useInstitution(institutionId as string);

  return (
    <section className="flex flex-col md:flex-row justify-center gap-4 py-8 md:py-10">
      <div className="w-full md:w-2/5">
        <InstitutionCard institution={institution} />
      </div>
      <div className="w-full md:w-3/5 flex items-start justify-start">
        <Card className="flex p-4 w-full">
          <EditInstitutionBtn institutionId={institutionId as string} className="ml-auto" />
        </Card>
      </div>
    </section>
  );
}

import { Person } from "@/src/entities/persons/Person";
import { Institution } from "@/src/entities/institutions/Institution";
import PersonsTable from "./PersonsTable";

interface InstitutionSectionProps {
  persons: Person[];
  institution: Institution;
}

export default function InstitutionSection({
  persons,
  institution,
}: InstitutionSectionProps) {
  return (
    <section className="p-8">
      <header>{institution.name}</header>
      <PersonsTable persons={persons} />
    </section>
  );
}

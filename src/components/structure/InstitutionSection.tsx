import { Person } from "@/src/entities/persons/Person";
import { Institution } from "@/src/entities/institutions/Institution";
import PersonsTable from "../person/PersonsTable";
import { subtitle } from "@/components/primitives";

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
      <header className={subtitle({ class: "mb-2" })}>
        {institution.name}
      </header>
      <PersonsTable persons={persons} />
    </section>
  );
}

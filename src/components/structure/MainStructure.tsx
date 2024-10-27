import { persons } from "@/src/entities/persons/persons";
import InstitutionSection from "./InstitutionSection";
import { presidentOffice } from "@/src/entities/institutions/institutions";

export default function MainStructure() {
  const presidentOfficePersons = persons.filter((person) => {
    const currentJob = person.jobHistory.find((record) => !record.end);
    return currentJob?.institutionId === "613b4738-1ac1-4ced-b745-229b6516f2fc";
  });

  return (
    <section className="p-8">
      <InstitutionSection
        persons={presidentOfficePersons}
        institution={presidentOffice}
      />
    </section>
  );
}

import { persons } from "@/src/entities/persons/persons";
import PersonCard from "./PersonCard";

export default function MainStructure() {
  return (
    <section className="p-8">
      {persons.map((person) => (
        <PersonCard key={person.id} person={person} />
      ))}
    </section>
  );
}

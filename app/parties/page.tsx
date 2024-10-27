import { title } from "@/components/primitives";
import PartiesTable from "@/src/components/party/PartiesTable";
import { partiesList } from "@/src/entities/parties/parties";

export default function PartiesPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <h1 className={title()}>Parties</h1>
      <PartiesTable parties={partiesList} />
    </div>
  );
}

import { Person } from "@/src/entities/persons/Person";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { format } from "date-fns";

interface PersonCardProps {
  person?: Person;
  className?: string;
}

export default function PersonCard({ person, className }: PersonCardProps) {
  if (!person) {
    return null;
  }

  const { firstName, lastName, birthDate, photoUrl, jobHistory } = person;
  const currentJob = jobHistory.find((record) => !record.end)?.position || "-";

  return (
    <Card className={["py-4", className].join(" ")}>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <small className="text-default-500">
          {format(birthDate, "dd.MM.yyyy")}
        </small>
        <h4 className="font-bold text-large">{`${firstName} ${lastName}`}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt={lastName}
          className="object-cover rounded-xl mb-4 w-full"
          src={photoUrl || undefined}
          width="100%"
        />
        <p className="text-tiny uppercase font-bold">{currentJob}</p>
      </CardBody>
    </Card>
  );
}

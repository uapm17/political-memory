import { Person } from "@/src/entities/persons/Person";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Institution } from "@/src/entities/institutions/Institution";
import JobHistoryRecord from "./JobHistoryRecord";

interface PersonCardProps {
  person?: Person;
  institutionsMap: Map<string, Institution>;
}

export default function JobHistory({
  person,
  institutionsMap,
}: PersonCardProps) {
  if (!person) {
    return null;
  }

  const { jobHistory } = person;
  // const currentJob = jobHistory.find((record) => !record.end)?.position || "-";

  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Job History</p>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        {jobHistory.map((job) => (
          <JobHistoryRecord
            key={job.institutionId}
            job={job}
            institutionsMap={institutionsMap}
          />
        ))}
      </CardBody>
    </Card>
  );
}

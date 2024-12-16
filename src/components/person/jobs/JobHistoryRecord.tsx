import CountryFlag from "@/src/common/counties/CountryFlag";
import { Institution } from "@/src/entities/institutions/Institution";
import { typesColorMap } from "@/src/entities/institutions/institutions.utils";
import { Job } from "@/src/entities/persons/Person";
import { Image } from "@nextui-org/image";
import { Chip } from "@nextui-org/react";
import { format } from "date-fns";
import JobDetailsBtn from "./JobDetailsBtn";

const InstitutionInfo = ({
  institution,
  className,
}: {
  institution?: Institution;
  className?: string;
}) => {
  if (!institution) {
    return null;
  }

  const { name, city, country, type } = institution;

  return (
    <div className={["items-start flex-col", className].join(" ")}>
      <div className="flex items-center gap-2 w-full mb-0">
        <CountryFlag code={country} size={36} />
        <p className="text-tiny uppercase font-bold">{city}</p>
        <Chip
          className="capitalize ml-auto"
          color={typesColorMap.get(type)}
          size="sm"
          variant="flat"
        >
          {type}
        </Chip>
      </div>
      <h4 className="font-bold text-large">{name}</h4>
    </div>
  );
};

interface JobHistoryRecordProps {
  job: Job;
  institutionsMap: Map<string, Institution>;
}

/* TDOD: вивести номер скликання для депутатів */
export default function JobHistoryRecord({
  job,
  institutionsMap,
}: JobHistoryRecordProps) {
  const { start, end, position, institutionId, description, details } = job;
  const institution =
    (institutionId && institutionsMap.get(institutionId)) || undefined;
  const period = [
    start ? format(start, "dd.MM.yyyy") : "-",
    end ? format(end, "dd.MM.yyyy") : "Present",
  ].join(" - ");

  return (
    <div className="border-none bg-background/60 dark:bg-default-100/50">
      <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 justify-center">
        <div className="relative col-span-6 md:col-span-4 flex flex-col">
          <Image
            alt={institution?.name}
            className="object-cover mb-2"
            height={200}
            shadow="none"
            radius="sm"
            src={institution?.logoUrl || undefined}
            width="100%"
          />
        </div>
        <div className="flex flex-col col-span-6 md:col-span-8">
          <InstitutionInfo institution={institution} className="mb-4" />
          <div className="flex flex-col">
            <p className="text-tiny uppercase font-bold">{position}</p>
            <small className="text-default-500">{period}</small>
          </div>
          <p className="text-sm mt-4">{description}</p>
          {details && (
            <JobDetailsBtn jobDetails={details} className="mt-auto ml-auto" />
          )}
        </div>
      </div>
    </div>
  );
}

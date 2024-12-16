import React from "react";
import { Card, CardBody, Link } from "@nextui-org/react";
import CountryFlag from "@/src/common/counties/CountryFlag";
import { Institution } from "@/src/entities/institutions/Institution";
import { typesColorMap } from "@/src/entities/institutions/institutions.utils";
import { JobDetails } from "@/src/entities/persons/Person";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { Chip } from "@nextui-org/react";
import { format } from "date-fns";

const linksTitleMap = new Map<string, string>([
  [
    "electronicSystemRegistries",
    "Реєстрація депутата за допомогою електронної системи",
  ],
  [
    "electronicBillLegislativeActivity",
    'Законотворча діяльність в системі "Електронний законопроект"',
  ],
  ["legislativeActivity", "Законотворча діяльність"],
  ["fractionsMovement", "Переходи по фракціях"],
  ["reports", "Депутатські запити"],
  ["speechesChronology", "Хронологія виступів депутата"],
  ["voting", "Голосування депутата"],
  ["convocationPositions", "Посади протягом скликання"],
]);

type LinksProps = {
  links: Record<string, string>;
  title: string;
};

const Links = ({ title, links }: LinksProps) => {
  const linksList = Object.entries(links).map(([key, value]) => ({
    title: linksTitleMap.get(key) || "Перейти за посиланням",
    value,
  }));

  if (linksList.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col mb-4">
      <p className="text-tiny uppercase font-bold">{title}</p>
      <ul className="flex flex-col">
        {linksList.map(({ title, value }) => (
          <Link
            key={value}
            href={value}
            underline="hover"
            showAnchorIcon
            target="_blank"
            className="text-sm text-default-500 pl-2 pb-1"
          >
            {title}
          </Link>
        ))}
      </ul>
    </div>
  );
};

type InfoRecordProps = {
  title: string;
  value: string | number;
};

const InfoRecord = ({ value, title }: InfoRecordProps) => {
  if (!value) {
    return null;
  }
  return (
    <div className="flex flex-col mb-4">
      <p className="text-tiny uppercase font-bold">{title}</p>
      <small className="text-default-500 capitalize">{value}</small>
    </div>
  );
};

type InfoListProps = {
  title: string;
  value: string[];
  listMarker?: string;
};

const InfoList = ({ value, title, listMarker = "" }: InfoListProps) => {
  if (value.length === 0) {
    return null;
  }
  return (
    <div className="flex flex-col mb-4">
      <p className="text-tiny uppercase font-bold">{title}</p>
      <ul className="flex flex-col">
        {value.map((item) => (
          <li key={item} className="text-sm text-default-500 pl-2 pb-1">
            {`${listMarker} ${item}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

interface JobHistoryRecordProps {
  jobDetails: JobDetails;
}

export default function JobDetailsInfo({ jobDetails }: JobHistoryRecordProps) {
  const {
    type,
    convocationNumber,
    choosenBy,
    party,
    listNumber,
    jobStart,
    position,
    otherPositions,
    generalInfo,
    links,
    fullTimeAssistants,
    volonteerAssistants,
  } = jobDetails;

  if (type !== "uaDeputy") {
    return null;
  }

  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
      shadow="none"
    >
      <CardBody className="grid grid-cols-12  justify-center">
        <div className="flex flex-col col-span-12">
          <InfoRecord title="Скликання ВР" value={convocationNumber} />
          <InfoRecord title="Позиція" value={position} />
          <InfoRecord title="Обраний по" value={choosenBy} />
          <InfoRecord title="Партія" value={party} />
          <InfoRecord title="Номер у списку" value={listNumber} />
          <InfoRecord
            title="Дата набуття депутатських повноважень"
            value={jobStart && format(jobStart, "dd.MM.yyyy")}
          />
          <InfoRecord title="Відомості на момент обрання" value={generalInfo} />
          <InfoList title="Роль у ВР" listMarker="☝️" value={otherPositions} />
          <Links title="Посилання" links={links} />
          <InfoList
            title="Помічники на постійній основі"
            listMarker="🤝"
            value={fullTimeAssistants}
          />
          <InfoList
            title="Помічники на волонтерській основі"
            listMarker="🤝"
            value={volonteerAssistants}
          />
        </div>
      </CardBody>
    </Card>
  );
}

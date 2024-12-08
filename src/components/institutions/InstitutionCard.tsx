import { Chip } from "@nextui-org/react";
import { Image } from "@nextui-org/image";
import CountryFlag from "@/src/common/counties/CountryFlag";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Institution } from "@/src/entities/institutions/Institution";
import { typesColorMap } from "@/src/entities/institutions/institutions.utils";

interface InstitutionCardProps {
  institution?: Institution;
}

export default function InstitutionCard({ institution }: InstitutionCardProps) {
  if (!institution) {
    return null;
  }

  const { name, description, country, city, type, logoUrl } = institution;

  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 items-start flex-col">
        <div className="flex items-center gap-2 w-full mb-4">
          <CountryFlag code={country} size={36} />
          <p className="text-tiny uppercase font-bold">{city}</p>
          <Chip
            className="capitalize ml-auto"
            color={typesColorMap.get(institution.type)}
            size="sm"
            variant="flat"
          >
            {type}
          </Chip>
        </div>
        <h4 className="font-bold text-large">{name}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt={name}
          className="object-cover rounded-xl w-full"
          src={logoUrl || undefined}
        />
        <p className="text-sm mt-4">{description}</p>
      </CardBody>
    </Card>
  );
}

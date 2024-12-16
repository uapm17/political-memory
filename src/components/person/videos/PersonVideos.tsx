import { Person } from "@/src/entities/persons/Person";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Accordion, AccordionItem, Chip } from "@nextui-org/react";
import { format } from "date-fns";
import { YouTubeIcon } from "@/src/icons/YouTubeIcon";
import { TikTokIcon } from "@/src/icons/TikTokIcon";

export const getIcon = (videoUrl: string) => {
  if (videoUrl.includes("youtube.com")) {
    return <YouTubeIcon className="text-primary" />;
  }

  if (videoUrl.includes("tiktok.com")) {
    return <TikTokIcon className="text-primary" />;
  }

  return null;
};

interface PersonCardProps {
  person?: Person;
}

export default function PersonVideos({ person }: PersonCardProps) {
  if (!person) {
    return null;
  }

  const itemClasses = {
    base: "py-0 w-full",
    title: "font-normal text-medium",
    trigger:
      "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
    indicator: "text-medium",
    content: "text-small px-2",
  };

  const { videos } = person;

  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Videos</p>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Accordion
          className="p-2 flex flex-col gap-1 w-full"
          itemClasses={itemClasses}
          showDivider={false}
        >
          {videos.map((videoRecord) => (
            <AccordionItem
              key={videoRecord.id}
              aria-label={videoRecord.video.name}
              startContent={getIcon(videoRecord.video.url)}
              subtitle={
                <p className="flex">
                  <span className="text-primary ml-1">
                    {format(videoRecord.date, "dd.MM.yyyy")}
                  </span>
                  {videoRecord.tags.map((tag) => (
                    <Chip key={tag} size="sm" variant="flat">
                      {tag}
                    </Chip>
                  ))}
                </p>
              }
              title={videoRecord.video.name}
            >
              <iframe src={videoRecord.video.url} width="100%" height="315" />
            </AccordionItem>
          ))}
        </Accordion>
        {videos.length === 0 && (
          <p className="text-center text-default-300 text-sm">No videos</p>
        )}
      </CardBody>
    </Card>
  );
}

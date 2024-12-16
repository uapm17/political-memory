import { VideoRecord } from "@/src/entities/persons/Person";
import { AccordionItem, Chip } from "@nextui-org/react";
import { YouTubeIcon } from "@/src/icons/YouTubeIcon";
import { format } from "date-fns";

interface VideoRecordProps {
  videoRecord: VideoRecord;
}

const PersonVideoRecord = ({ videoRecord }: VideoRecordProps) => {
  const { video, tags, date } = videoRecord;
  const { url, name } = video;

  // return (<p>VideoRecord</p>);

  return (
    <AccordionItem
      aria-label={name}
      startContent={<YouTubeIcon className="text-primary" />}
      subtitle={
        <p className="flex">
          <span className="text-primary ml-1">
            {format(date, "dd.MM.yyyy")}
          </span>
          {tags.map((tag) => (
            <Chip key={tag} size="sm" variant="flat">
              {tag}
            </Chip>
          ))}
        </p>
      }
      title={name}
    >
      <iframe src={url} width="100%" height="315" />
    </AccordionItem>
  );
};

export default PersonVideoRecord;

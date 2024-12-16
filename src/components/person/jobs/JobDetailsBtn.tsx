import { Button, useDisclosure } from "@nextui-org/react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@nextui-org/drawer";
import { JobDetails } from "@/src/entities/persons/Person";
import JobDetailsInfo from "./JobDetailsInfo";

type JobDetailsProps = {
  jobDetails: JobDetails;
  className?: string;
};

export default function JobDetailsBtn({
  jobDetails,
  className,
}: JobDetailsProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        variant="light"
        className={["underline", className].join(" ")}
        onPress={onOpen}
      >
        Details
      </Button>
      <Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">
                Детальна інформація про посаду
              </DrawerHeader>
              <DrawerBody>
                <JobDetailsInfo jobDetails={jobDetails} />
              </DrawerBody>
              <DrawerFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}

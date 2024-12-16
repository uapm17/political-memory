import { useCallback } from "react";
import { PlusIcon } from "@/src/icons/PlusIcon";
import { Button, useDisclosure } from "@nextui-org/react";
import { VideoRecord } from "@/src/entities/persons/Person";
import { usePerson } from "@/src/entities/persons/persons.hooks";
import { createEmptyVideoRecord } from "@/src/utils/externalLinks.utils";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
} from "@nextui-org/drawer";
import VideoRecordForm from "./VideoForm";

type AddVideoBtnProps = {
  personId: string;
  className?: string;
};

export default function AddVideoBtn({ personId, ...rest }: AddVideoBtnProps) {
  const { person, onUpdate } = usePerson(personId);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const initialValues = createEmptyVideoRecord();

  const handleSubmit = useCallback(
    (formValues: VideoRecord) => {
      if (!person) {
        return;
      }

      const { id, ...rest } = person;
      const newVideos = [...person.videos, formValues];
      const updatedPerson = { ...rest, videos: newVideos };
      onUpdate(updatedPerson, person.id);
    },
    [person]
  );

  if (!person) {
    return null;
  }

  return (
    <>
      <Button color="primary" variant="flat" onPress={onOpen} {...rest}>
        Add video
      </Button>
      <Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">
                Create video
              </DrawerHeader>
              <DrawerBody>
                <VideoRecordForm
                  initialValues={initialValues}
                  onSubmit={handleSubmit}
                />
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

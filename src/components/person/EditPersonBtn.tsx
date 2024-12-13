import { useCallback } from "react";
import { Button, useDisclosure } from "@nextui-org/react";
import { PersonData } from "@/src/entities/persons/Person";
import { usePerson } from "@/src/entities/persons/persons.hooks";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
} from "@nextui-org/drawer";
import PersonForm from "./PersonForm";

type EditPersonBtnProps = {
  personId: string;
  className?: string;
};

export default function EditPersonBtn({
  personId,
  ...rest
}: EditPersonBtnProps) {
  const { person, onUpdate } = usePerson(personId);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleSubmit = useCallback(
    (formValues: PersonData) => {
      onUpdate(formValues, personId);
    },
    [personId]
  );

  if (!person) {
    return null;
  }

  return (
    <>
      <Button color="primary" variant="flat" onPress={onOpen} {...rest}>
        Edit
      </Button>
      <Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">
                Create person
              </DrawerHeader>
              <DrawerBody>
                <PersonForm
                  initialValues={person}
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

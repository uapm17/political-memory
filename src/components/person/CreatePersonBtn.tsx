import { Button, useDisclosure } from "@nextui-org/react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@nextui-org/drawer";
import PersonForm from "./PersonForm";
import { createEmptyPerson } from "@/src/entities/persons/persons.utils";
import { useCallback } from "react";
import { PersonData } from "@/src/entities/persons/Person";
import { PlusIcon } from "@/src/icons/PlusIcon";
import { useDispatch } from "react-redux";
import { createPersonAction } from "@/src/entities/persons/persons.actions";

export default function CreatePersonBtn() {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const initialValues = createEmptyPerson();
  const handleSubmit = useCallback((formValues: PersonData) => {
    dispatch(createPersonAction(formValues));
  }, []);

  return (
    <>
      <Button
        color="primary"
        variant="flat"
        onPress={onOpen}
        endContent={<PlusIcon />}
      >
        Create person
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

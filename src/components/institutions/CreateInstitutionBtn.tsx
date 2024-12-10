import { useCallback } from "react";
import { Button, useDisclosure } from "@nextui-org/react";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
} from "@nextui-org/drawer";
import InstitutionForm from "./InstitutionForm";
import { createEmptyInstitution } from "@/src/entities/institutions/institutions.utils";
import { InstitutionData } from "@/src/entities/institutions/Institution";
import { PlusIcon } from "@/src/icons/PlusIcon";
import { useDispatch } from "react-redux";
import { createInstitution } from "@/src/gateways/institutions.gateway";
import { createInstitutionAction } from "@/src/entities/institutions/institutions.actions";

export default function CreateInstitutionBtn() {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const initialValues = createEmptyInstitution();
  const handleSubmit = useCallback((formValues: InstitutionData) => {
    dispatch(createInstitutionAction(formValues));
  }, []);

  return (
    <>
      <Button
        color="primary"
        variant="flat"
        onPress={onOpen}
        endContent={<PlusIcon />}
      >
        Add
      </Button>
      <Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">
                Create institution
              </DrawerHeader>
              <DrawerBody>
                <InstitutionForm
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

"use client";
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
import { InstitutionData } from "@/src/entities/institutions/Institution";
import { useInstitution } from "@/src/entities/institutions/institutions.hooks";

type EditInstitutionBtnProps = {
  institutionId: string;
  className?: string;
};

export default function EditInstitutionBtn({
  institutionId,
  ...rest
}: EditInstitutionBtnProps) {
  const { institution, onUpdate } = useInstitution(institutionId);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleSubmit = useCallback(
    (formValues: InstitutionData) => {
      onUpdate(formValues, institutionId);
    },
    [institutionId]
  );

  if (!institution) {
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
                Edit institution
              </DrawerHeader>
              <DrawerBody>
                <InstitutionForm
                  initialValues={institution}
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

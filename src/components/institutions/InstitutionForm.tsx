import React, { useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import { Form } from "@nextui-org/form";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import {
  InstitutionData,
  InstitutionType,
} from "@/src/entities/institutions/Institution";
import { countriesList } from "@/src/common/countriesList";

type InstitutionFormProps = {
  initialValues: InstitutionData;
  onSubmit: (personData: InstitutionData) => void;
};

export default function InstitutionForm({
  initialValues,
  onSubmit,
}: InstitutionFormProps) {
  const { register, handleSubmit, control } = useForm<InstitutionData>({
    defaultValues: initialValues,
    mode: "onChange",
  });

  const countriesOptios = useMemo(
    () =>
      countriesList.map((countryCode) => ({
        value: countryCode,
        label: countryCode,
      })),
    []
  );

  const typesOptions = useMemo(
    () =>
      Object.values(InstitutionType).map((type) => ({
        value: type,
        label: type,
      })),
    []
  );

  return (
    <Form
      className="w-full justify-center  space-y-4"
      validationBehavior="native"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-4 w-full">
        <Input
          isRequired
          {...register("name")}
          errorMessage={({ validationDetails }) => {
            if (validationDetails.valueMissing) {
              return "Please enter name";
            }
          }}
          label="Name"
          labelPlacement="outside"
          placeholder="Enter name"
        />

        <Input
          isRequired
          {...register("description")}
          errorMessage={({ validationDetails }) => {
            if (validationDetails.valueMissing) {
              return "Please enter description";
            }
          }}
          label="Description"
          labelPlacement="outside"
          placeholder="Enter description"
        />

        <Controller
          control={control}
          name="country"
          render={({ field: { name, value, onChange, ref } }) => (
            <Select
              isRequired
              ref={ref}
              name={name}
              label="Country"
              labelPlacement="outside"
              placeholder="Select country"
              value={value}
              defaultSelectedKeys={[value]}
              onChange={onChange}
            >
              {countriesOptios.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </Select>
          )}
        />

        <Input
          isRequired
          {...register("city")}
          errorMessage={({ validationDetails }) => {
            if (validationDetails.valueMissing) {
              return "City";
            }
          }}
          label="City"
          labelPlacement="outside"
          placeholder="City"
        />

        <Input
          isRequired
          {...register("logoUrl")}
          errorMessage={({ validationDetails }) => {
            if (validationDetails.valueMissing) {
              return "Logo URL";
            }
          }}
          label="Logo URL"
          labelPlacement="outside"
          placeholder="Logo URL"
        />

        <Controller
          control={control}
          name="type"
          render={({ field: { name, value, onChange, ref } }) => (
            <Select
              isRequired
              ref={ref}
              name={name}
              label="Type"
              labelPlacement="outside"
              placeholder="Select type"
              defaultSelectedKeys={[value]}
              value={value}
              onChange={onChange}
            >
              {typesOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </Select>
          )}
        />

        <div className="flex gap-4">
          <Button className="w-full" color="primary" type="submit">
            Submit
          </Button>
        </div>
      </div>
    </Form>
  );
}

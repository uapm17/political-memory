import React from "react";
import { Input, Button } from "@nextui-org/react";
import { Form } from "@nextui-org/form";
import { useForm, Controller } from "react-hook-form";
import { PersonData } from "@/src/entities/persons/Person";
import {
  CalendarDate,
  getLocalTimeZone,
  parseDate,
} from "@internationalized/date";
import { DatePicker } from "@nextui-org/date-picker";

type FormValues = Omit<PersonData, "birthDate"> & {
  birthDate: CalendarDate;
};

const mapPersonToFormValues = (personData: PersonData): FormValues => {
  const { birthDate, ...rest } = personData;

  return {
    birthDate: parseDate(birthDate.toISOString().split("T")[0]),
    ...rest,
  };
};

const mapPersonFromFormValues = (formValues: FormValues): PersonData => {
  const { birthDate, ...rest } = formValues;

  return {
    birthDate: birthDate.toDate(getLocalTimeZone()),
    ...rest,
  };
};

type PersonFormProps = {
  initialValues: PersonData;
  onSubmit: (personData: PersonData) => void;
};

export default function PersonForm({
  initialValues,
  onSubmit,
}: PersonFormProps) {
  const { register, handleSubmit, control } = useForm<FormValues>({
    defaultValues: mapPersonToFormValues(initialValues),
    mode: "onChange",
  });

  return (
    <Form
      className="w-full justify-center  space-y-4"
      validationBehavior="native"
      onSubmit={handleSubmit((val) => onSubmit(mapPersonFromFormValues(val)))}
    >
      <div className="flex flex-col gap-4 w-full">
        <Input
          isRequired
          {...register("firstName")}
          errorMessage={({ validationDetails }) => {
            if (validationDetails.valueMissing) {
              return "Please enter first name";
            }
          }}
          label="First Name"
          labelPlacement="outside"
          placeholder="Enter first name"
        />

        <Input
          isRequired
          {...register("lastName")}
          errorMessage={({ validationDetails }) => {
            if (validationDetails.valueMissing) {
              return "Please enter last email";
            }
          }}
          label="Last name"
          labelPlacement="outside"
          placeholder="Enter last name"
        />

        <Controller
          control={control}
          name="birthDate"
          render={({ field: { name, value, onChange, ref } }) => (
            <DatePicker
              ref={ref}
              name={name}
              className="max-w-[284px]"
              label="Birth date"
              value={value}
              onChange={onChange}
            />
          )}
        />

        <Input
          isRequired
          {...register("email")}
          errorMessage={({ validationDetails }) => {
            if (validationDetails.valueMissing) {
              return "Please enter email";
            }
          }}
          label="Email"
          labelPlacement="outside"
          placeholder="Enter email"
          type="email"
        />

        <Input
          isRequired
          {...register("photoUrl")}
          errorMessage={({ validationDetails }) => {
            if (validationDetails.valueMissing) {
              return "Please enter photo URL";
            }
          }}
          label="Photo URL"
          labelPlacement="outside"
          placeholder="Enter photo URL"
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

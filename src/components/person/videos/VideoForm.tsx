import React from "react";
import { Input, Button } from "@nextui-org/react";
import { Form } from "@nextui-org/form";
import { useForm, Controller } from "react-hook-form";
import { VideoRecord } from "@/src/entities/persons/Person";
import {
  CalendarDate,
  getLocalTimeZone,
  parseDate,
} from "@internationalized/date";
import { DatePicker } from "@nextui-org/date-picker";

type FormValues = Omit<VideoRecord, "date"> & {
  date: CalendarDate;
};

const mapVideoRecordToFormValues = (personData: VideoRecord): FormValues => {
  const { date, ...rest } = personData;

  return {
    date: parseDate(date.toISOString().split("T")[0]),
    ...rest,
  };
};

const mapPersonFromFormValues = (formValues: FormValues): VideoRecord => {
  const { date, ...rest } = formValues;

  return {
    date: date.toDate(getLocalTimeZone()),
    ...rest,
  };
};

type VideoRecordForm = {
  initialValues: VideoRecord;
  onSubmit: (videoRecord: VideoRecord) => void;
};

export default function VideoRecordForm({
  initialValues,
  onSubmit,
}: VideoRecordForm) {
  const { register, handleSubmit, control } = useForm<FormValues>({
    defaultValues: mapVideoRecordToFormValues(initialValues),
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
          {...register("video.name")}
          errorMessage={({ validationDetails }) => {
            if (validationDetails.valueMissing) {
              return "Please enter video title";
            }
          }}
          label="Title"
          labelPlacement="outside"
          placeholder="Enter first name"
        />

        <Controller
          control={control}
          name="date"
          render={({ field: { name, value, onChange, ref } }) => (
            <DatePicker
              ref={ref}
              name={name}
              className="max-w-[284px]"
              label="Date"
              value={value}
              onChange={onChange}
            />
          )}
        />

        <Input
          isRequired
          {...register("video.url")}
          errorMessage={({ validationDetails }) => {
            if (validationDetails.valueMissing) {
              return "Please enter video URL";
            }
          }}
          label="Video URL"
          labelPlacement="outside"
          placeholder="Enter video URL"
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

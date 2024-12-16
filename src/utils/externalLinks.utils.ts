import { nanoid } from "nanoid";
import { VideoRecord } from "../entities/persons/Person";

export const createEmptyVideoRecord = (): VideoRecord => {
  return {
    id: nanoid(),
    video: {
      url: "",
      name: "",
      icon: "",
    },
    tags: [],
    date: new Date(),
  };
};

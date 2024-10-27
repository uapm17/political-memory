import { Party } from "./Party";

export const partiesList: Party[] = [
  {
    id: "3f518592-9ddf-48a2-9eba-7d20919e50d4",
    name: "Слуга народу",
    description:
      "Українська центристська і «радикальна центриська» політична партія, що юридично переоформилася із політичної партії «Партія рішучих змін» (Wikipedia)",
    start: new Date(2017, 11, 2),
    end: null,
    actions: [],
  },
];

export const partiesMap = new Map(
  partiesList.map((party) => [party.id, party])
);

import { Party, PartyStatus } from "./Party";

const slugaNaroduPary: Party = {
  id: "3f518592-9ddf-48a2-9eba-7d20919e50d4",
  name: "Слуга народу",
  status: PartyStatus.active,
  description:
    "Українська центристська і «радикальна центриська» політична партія, що юридично переоформилася із політичної партії «Партія рішучих змін» (Wikipedia)",
  start: new Date(2017, 11, 2),
  links: [
    {
      name: "Вікіпедія",
      url: "https://uk.wikipedia.org/wiki/%D0%A1%D0%BB%D1%83%D0%B3%D0%B0_%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D1%83",
      icon: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fru.wikipedia.org%2Fwiki%2F%25D0%2592%25D0%25B8%25D0%25BA%25D0%25B8%25D0%25BF%25D0%25B5%25D0%25B4%25D0%25B8%25D1%258F&psig=AOvVaw3-1xCZduMWJ_10nX8kk0S4&ust=1730125541687000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJi-2IXirokDFQAAAAAdAAAAABAE",
    },
  ],
  website: {
    url: "https://sluga-narodu.com/",
    name: "Вебсайт партії",
    icon: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fru.wikipedia.org%2Fwiki%2F%25D0%25A1%25D0%25BB%25D1%2583%25D0%25B3%25D0%25B0_%25D0%25BD%25D0%25B0%25D1%2580%25D0%25BE%25D0%25B4%25D0%25B0_%2528%25D0%25BF%25D0%25B0%25D1%2580%25D1%2582%25D0%25B8%25D1%258F%2529&psig=AOvVaw0vjRH_L98kRG0aV4rMozDz&ust=1730125642690000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJj0s7XirokDFQAAAAAdAAAAABAE",
  },
  end: null,
  actions: [],
  logoUrl:
    "https://upload.wikimedia.org/wikipedia/commons/b/b0/Servant_of_the_People_Party_Logo.svg",
};

export const partiesList: Party[] = [slugaNaroduPary];

export const partiesMap = new Map(
  partiesList.map((party) => [party.id, party])
);

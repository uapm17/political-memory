import { Party, PartyStatus } from "./Party";

const slugaNaroduPary: Party = {
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

const yevropeiskaSolidarnist: Party = {
  name: "Європейська Солідарність",
  status: PartyStatus.active,
  description: "Українська правоцентристська консервативна політична партія",
  start: new Date(2000, 4, 5),
  links: [
    {
      name: "Вікіпедія",
      url: "https://uk.wikipedia.org/wiki/%D0%84%D0%B2%D1%80%D0%BE%D0%BF%D0%B5%D0%B9%D1%81%D1%8C%D0%BA%D0%B0_%D0%A1%D0%BE%D0%BB%D1%96%D0%B4%D0%B0%D1%80%D0%BD%D1%96%D1%81%D1%82%D1%8C",
      icon: "wikipedia",
    },
  ],
  website: {
    url: "https://eurosolidarity.org/",
    name: "Вебсайт партії",
    icon: "website",
  },
  end: null,
  actions: [],
  logoUrl:
    "https://upload.wikimedia.org/wikipedia/commons/f/f7/Small_logo_European_Solidarity.png",
};

const batkivshchuna: Party = {
  name: "ВО «Батьківщина»",
  status: PartyStatus.active,
  description: "Українська політична партія центристського[8][9] спрямування",
  start: new Date(1999, 6, 9),
  links: [
    {
      name: "Вікіпедія",
      url: "https://uk.wikipedia.org/wiki/%D0%92%D1%81%D0%B5%D1%83%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%81%D1%8C%D0%BA%D0%B5_%D0%BE%D0%B1%27%D1%94%D0%B4%D0%BD%D0%B0%D0%BD%D0%BD%D1%8F_%C2%AB%D0%91%D0%B0%D1%82%D1%8C%D0%BA%D1%96%D0%B2%D1%89%D0%B8%D0%BD%D0%B0%C2%BB",
      icon: "wikipedia",
    },
  ],
  website: {
    url: "http://ba.org.ua/",
    name: "Вебсайт партії",
    icon: "website",
  },
  end: null,
  actions: [],
  logoUrl:
    "https://scontent.fiev26-1.fna.fbcdn.net/v/t39.30808-6/271741268_479614960195937_3352190801041376306_n.png?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=R8QoY5teFfAQ7kNvgE8jp4c&_nc_zt=23&_nc_ht=scontent.fiev26-1.fna&_nc_gid=A2mIyf-MpaVYbgyXjbsMWU5&oh=00_AYC9gLiI60bvgR49wJZ5m98YbbB9rYYVwCJXQYUgHYIg_w&oe=67244823",
};

const golos: Party = {
  name: "Голос",
  status: PartyStatus.active,
  description: "Українська ліберальна політична партія",
  start: new Date(2015, 1, 10),
  links: [
    {
      name: "Вікіпедія",
      url: "https://uk.wikipedia.org/wiki/%D0%93%D0%BE%D0%BB%D0%BE%D1%81_(%D0%BF%D0%B0%D1%80%D1%82%D1%96%D1%8F)",
      icon: "wikipedia",
    },
  ],
  website: {
    url: "https://goloszmin.org/",
    name: "Вебсайт партії",
    icon: "website",
  },
  end: null,
  actions: [],
  logoUrl:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Holos_logo_2020.svg/2880px-Holos_logo_2020.svg.png",
};

const udar: Party = {
  name: "УДАР Віталія Кличка",
  status: PartyStatus.active,
  description: "всеукраїнська політична партія",
  start: new Date(2005, 2, 14),
  links: [
    {
      name: "Вікіпедія",
      url: "https://uk.wikipedia.org/wiki/%D0%A3%D0%94%D0%90%D0%A0_%D0%92%D1%96%D1%82%D0%B0%D0%BB%D1%96%D1%8F_%D0%9A%D0%BB%D0%B8%D1%87%D0%BA%D0%B0",
      icon: "wikipedia",
    },
  ],
  website: {
    url: "https://udar.party/",
    name: "Вебсайт партії",
    icon: "website",
  },
  end: null,
  actions: [],
  logoUrl:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Logo_of_the_Ukrainian_Democratic_Alliance_for_Reform_%282020%29.svg/2880px-Logo_of_the_Ukrainian_Democratic_Alliance_for_Reform_%282020%29.svg.png",
};

const radukalnaLiashka: Party = {
  name: "Радикальна партія Олега Ляшка",
  status: PartyStatus.active,
  description: "всеукраїнська політична партія",
  start: new Date(2010, 8, 28),
  links: [
    {
      name: "Вікіпедія",
      url: "https://uk.wikipedia.org/wiki/%D0%A0%D0%B0%D0%B4%D0%B8%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0_%D0%BF%D0%B0%D1%80%D1%82%D1%96%D1%8F_%D0%9E%D0%BB%D0%B5%D0%B3%D0%B0_%D0%9B%D1%8F%D1%88%D0%BA%D0%B0",
      icon: "wikipedia",
    },
  ],
  website: {
    url: "http://liashko.ua/",
    name: "Вебсайт партії",
    icon: "website",
  },
  end: null,
  actions: [],
  logoUrl:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/%D0%A0%D0%B0%D0%B4%D0%B8%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%BF%D0%B0%D1%80%D1%82%D0%B8%D1%8F_%D0%9B%D1%8F%D1%88%D0%BA%D0%BE_%D8%AD%D8%B2%D8%A8_%D9%85%D8%AA%D8%B7%D8%B1%D9%81_Lyashko.svg/2880px-%D0%A0%D0%B0%D0%B4%D0%B8%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%BF%D0%B0%D1%80%D1%82%D0%B8%D1%8F_%D0%9B%D1%8F%D1%88%D0%BA%D0%BE_%D8%AD%D8%B2%D8%A8_%D9%85%D8%AA%D8%B7%D8%B1%D9%81_Lyashko.svg.png",
};

export const partiesList: Party[] = [
  slugaNaroduPary,
  yevropeiskaSolidarnist,
  batkivshchuna,
  golos,
  udar,
  radukalnaLiashka,
];

export const partiesMap = new Map(
  partiesList.map((party) => [party.name, party])
);

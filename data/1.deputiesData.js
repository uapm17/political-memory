const axios = require("axios");
const cheerio = require("cheerio");
const admin = require("firebase-admin");
const { parse } = require("date-fns");
const { uk } = require("date-fns/locale");
const { handleCollectionSnapshot } = require("./firestore.utils");
const { deputiesUrls } = require("./9th-convocation");

const { load } = cheerio;

admin.initializeApp();
const db = admin.firestore();

const headers = {
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36",
};

const wait = async (time) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

const getDeputiesPages = async (pageUrl) => {
  const response = await axios.get(pageUrl, { headers });
  const html = response.data;
  const $ = load(html);

  /* Click is not working ;( */
  $("a#btnAllMPS").click();

  const deputiesUrls = [];
  $(".search-filter-results.search-filter-results-thumbnails")
    .children()
    .each(function getDeputyUrl() {
      const $deputyEl = $(this);
      const url = $deputyEl.find(".title > a").attr("href");
      deputiesUrls.push(url);
    });

  return deputiesUrls.filter(Boolean);
};

const findAttr = (elems, key) => {
  const keyIndex = elems.indexOf(key);

  if (keyIndex === -1) {
    return null;
  }

  const valueIndex = keyIndex + 1;

  return elems[valueIndex] || "";
};

const linksMap = new Map([
  ["Голосування депутата", "voting"],
  [
    "Реєстрація депутата за допомогою електронної системи",
    "electronicSystemRegistries",
  ],
  ["Переходи по фракціях", "fractionsMovement"],
  ["Посади протягом скликання", "convocationPositions"],
  ["Хронологія виступів депутата", "speechesChronology"],
  ["Депутатські запити", "reports"],
  [
    'Законотворча діяльність в системі "Електронний законопроект"',
    "electronicBillLegislativeActivity",
  ],
  ["Законотворча діяльність", "legislativeActivity"],
]);

const getRadaGovRefId = (pageUrl) => {
  // https://itd.rada.gov.ua/mps/info/page/20965
  const parts = pageUrl.split("/");
  const anchorIndex = parts.indexOf("page");
  parts[anchorIndex + 1];
  return parts[anchorIndex + 1] || null;
};

const scrapPerson = async (deputyUrl) => {
  const response = await axios.get(deputyUrl, { headers });
  const html = response.data;
  const $ = load(html);

  const fullName = $("h2").text();
  const photoUrl = $(".simple_info img").attr("src");
  const mainInfoParts = [];
  $(".mp-general-info dl")
    .children()
    .each(function getInfo() {
      const $elem = $(this);
      mainInfoParts.push($elem.text().trim());
    });
  const choosenBy = findAttr(mainInfoParts, "Обраний по:");
  const choosenFrom = findAttr(mainInfoParts, "Регіон:");
  const party = findAttr(mainInfoParts, "Партія:");
  const listNumberStr = findAttr(mainInfoParts, "Номер у списку:");
  const listNumber = listNumberStr ? Number(listNumberStr) : null;
  const jobStartStr = findAttr(
    mainInfoParts,
    "Дата набуття депутатських повноважень:"
  );
  const formatString = "d MMMM yyyy'р.'";
  const jobStart = parse(jobStartStr, formatString, new Date(), { locale: uk });

  const $containerEl = $(".mp-general-info").parent();
  $containerEl.find("h2").remove();
  $containerEl.find("div").remove();
  const position = $containerEl.text().trim();
  const otherPositions = Array.from($("ul.level1").children()).map((li) =>
    $(li).text().trim()
  );
  const dateOfBirthStr = $(
    $($($("table.simple_info").get(1)).find("tr").get(0))
      .find("td")
      .get(1)
  )
    .text()
    .trim();
  const birthDate = parse(dateOfBirthStr, formatString, new Date(), {
    locale: uk,
  });
  const generalInfo = $(
    $($($("table.simple_info").get(1)).find("tr").get(1))
      .find("td")
      .get(1)
  )
    .text()
    .trim();

  const linksList = Array.from($($(".topTitle").get(0)).find("a"))
    .map((link) => {
      const title = linksMap.get($(link).text().trim());
      const url = $(link).attr("href");

      if (title && url) {
        return {
          title,
          url: $(link).attr("href"),
        };
      }

      return null;
    })
    .filter(Boolean);

  const links = Object.fromEntries(
    linksList.map((link) => [link.title, link.url])
  );

  const radaGovRefId = getRadaGovRefId(deputyUrl);
  const $volonteerAssistantsEl = $("*:contains('На громадських засадах')")
    .last()
    .parent();
  $volonteerAssistantsEl.find("span").remove();
  const volonteerAssistants = $volonteerAssistantsEl
    .text()
    .trim()
    .split(",")
    .map((a) => a.trim());

  const $fullTimeAssistantsEl = $(
    "*:contains('За строковим трудовим договором на постійній основі:')"
  )
    .last()
    .parent();
  $fullTimeAssistantsEl.find("span").remove();
  const fullTimeAssistants = $fullTimeAssistantsEl
    .text()
    .trim()
    .split(",")
    .map((a) => a.trim());
  const email = $($("div.topTitle").get(1)).find("a").text().trim() || null;
  const [lastName, firstName, middleName] = fullName.split(" ");
  const general = {
    lastName,
    firstName,
    middleName,
    photoUrl,
    birthDate,
    email,
    references: { radaGovRefId },
  };
  const convocationInfo = {
    choosenBy,
    choosenFrom,
    party,
    listNumber,
    jobStart,
    position,
    otherPositions,
    generalInfo,
    links,
    fullTimeAssistants,
    volonteerAssistants,
  };

  return {
    general,
    convocationInfo,
    radaGovRefId,
  };
};

const createEmptyPerson = () => {
  return {
    firstName: "",
    lastName: "",
    birthDate: null,
    email: null,
    website: null,
    photoUrl: null,
    education: [],
    jobHistory: [],
    declarations: [],
    partyMembership: [],
    businesses: [],
    actions: [],
    investigations: [],
    family: [],
    criminalRecords: [],
  };
};

const getPersonDataFromDb = async (url) => {
  const radaGovRefId = getRadaGovRefId(url);

  const existingProfiles = await db
    .collection("persons")
    .where(`references.radaGovId`, "==", radaGovRefId)
    .get()
    .then(handleCollectionSnapshot);

  return existingProfiles[0] || null;
};

let updatesCount = 0;
let createsCount = 0;
let errorsCount = 0;

/* Find deputy by refId. Save to DB if not yet saved */
const saveOrUpdatePersonData = async ({
  personUrl,
  convocationNumber,
  convocationEnd,
  index,
}) => {
  await wait((index || 1) * 400);
  let person = await getPersonDataFromDb(personUrl);
  const scrappedPerson = await scrapPerson(personUrl);
  const { convocationInfo, general } = scrappedPerson;
  const newJob = {
    start: convocationInfo.jobStart,
    end: convocationEnd,
    position: "Депутат Верховної Ради України",
    institutionId: "P2Gyna5XXr5xb5Huv7D6",
    description: null,
    actions: [],
    details: {
      convocationNumber,
      ...convocationInfo,
    },
  };

  if (person) {
    const newJobs = person.jobHistory.concat(newJob);
    await db.doc(`persons/${person.id}`).update({
      jobHistory: newJobs,
      updatedDate: new Date(),
    });

    console.log(
      `Updated ${person.lastName} ${person.firstName} | ${person.id}`
    );
    updatesCount += 1;
    return;
  }

  const newPerson = {
    ...createEmptyPerson(),
    ...general,
    jobHistory: [newJob],
    createdDate: new Date(),
  };

  const newPersonId = await db
    .collection("persons")
    .add(newPerson)
    .then((doc) => doc.id);
  console.log(
    `Created ${newPerson.lastName} ${newPerson.firstName} | ${newPersonId}`
  );
  createsCount += 1;
};

// const deputiesListUrl = "http://w1.c1.rada.gov.ua/pls/site2/p_deputat_list";
const convocationEnd = null;
const convocationNumber = 9;

const getAndStoreDeputiesData = async () => {
  // const urlsList = await getDeputiesPages(deputiesListUrl);

  // console.log(urlsList);

  const promisesList = deputiesUrls.map((personUrl, index) => {
    return saveOrUpdatePersonData({
      personUrl,
      convocationNumber,
      convocationEnd,
      index,
    });
  });

  await Promise.all(promisesList);

  console.log(
    `===> Finish. Updated: ${updatesCount} | Created; ${createsCount} | Errors: ${errorsCount}`
  );
};

getAndStoreDeputiesData();

// scrapPerson("https://itd.rada.gov.ua/mps/info/page/21109").then(console.log);
// saveOrUpdatePersonData({
//   personUrl: "https://itd.rada.gov.ua/mps/info/page/21109",
//   convocationNumber: 9,
//   convocationEnd: null,
//   index: 1,
// }).then(console.log);

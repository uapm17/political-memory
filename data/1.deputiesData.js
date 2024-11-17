const axios = require("axios");
const cheerio = require("cheerio");
const { parse } = require("date-fns");
const { uk } = require("date-fns/locale");
const { load } = cheerio;

const deputiesListUrl = "http://w1.c1.rada.gov.ua/pls/site2/p_deputat_list";

const headers = {
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36",
};

const getDeputiesPages = async (pageUrl) => {
  const response = await axios.get(pageUrl, { headers });
  const html = response.data;
  const $ = load(html);
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
  const keyIndex = elems.findIndex((elem) => {
    return elem === key;
  });

  if (keyIndex === null) {
    return null;
  }

  const valueIndex = keyIndex + 1;

  return elems[valueIndex] || "";
};

const getDeputyData = async (deputyUrl) => {
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
  const party = findAttr(mainInfoParts, "Партія:");
  const listNumber = findAttr(mainInfoParts, "Номер у списку:");
  const jobStartStr = findAttr(
    mainInfoParts,
    "Дата набуття депутатських повноважень:"
  );
  const formatString = "d MMMM yyyy'р.'";
  const jobStart = parse(jobStartStr, formatString, new Date(), { locale: uk });

  return {
    fullName,
    photoUrl,
    choosenBy,
    party,
    listNumber,
    jobStartStr,
    jobStart,
  };
};

const getAndStoreDeputiesData = async () => {
  const urlsList = await getDeputiesPages(deputiesListUrl);
};

getDeputyData("https://itd.rada.gov.ua/mps/info/page/21109").then(console.log);

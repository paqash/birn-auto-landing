import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const resourcesBaseUrl =
  "https://birn-auto.s3.eu-central-1.amazonaws.com";
export const resourcesUrl = `${resourcesBaseUrl}/images`;

export const navItems = [
  {
    name: "homePage",
    image: `${resourcesUrl}/1.png`,
    label: "Dobro došli na Bazu",
  },
  {
    name: "aboutDatabase",
    image: `${resourcesUrl}/2.png`,
    label: "Dostupne informacije",
  },
  {
    name: "stats",
    image: `${resourcesUrl}/3.png`,
    label: "Koliko je potrošeno ove godine",
  },
  {
    name: "flags",
    image: `${resourcesUrl}/4.png`,
    label: "Koji tenderi su označeni",
  },
  {
    name: "money",
    image: `${resourcesUrl}/5.png`,
    label: "Kako se troše vaše pare",
  },
  {
    name: "money",
    image: `${resourcesUrl}/5.png`,
    hide: true,
    label: "Kako se troše vaše pare",
  },
];

export const dbUrl = "http://auta.detektor.ba/";

export const screenResolutions = {
  extraSmall: 600,
  small: 769,
  medium: 1200,
  large: 1537,
};

export const fullPageKey = publicRuntimeConfig.processEnv.FULLPAGE_KEY;

export const detektorURL = "https://detektor.ba";

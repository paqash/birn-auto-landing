import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const resourcesBaseUrl =
  "https://birn-auto.s3.eu-central-1.amazonaws.com";
export const resourcesUrl = `${resourcesBaseUrl}/images`;

export const navItems = [
  { name: "homePage", image: `${resourcesUrl}/1.png` },
  { name: "aboutDatabase", image: `${resourcesUrl}/2.png` },
  { name: "stats", image: `${resourcesUrl}/3.png` },
  { name: "flags", image: `${resourcesUrl}/4.png` },
  { name: "money", image: `${resourcesUrl}/5.png` },
  { name: "money", image: `${resourcesUrl}/5.png`, hide: true },
];

export const dbUrl = "http://auta.detektor.ba/";

export const screenResolutions = {
  small: 768,
  medium: 1280,
};

export const fullPageKey = publicRuntimeConfig.processEnv.FULLPAGE_KEY;

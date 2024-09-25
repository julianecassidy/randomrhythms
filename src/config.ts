import type { Site } from "./types";

export const SITE: Site = {
  website: "https://randomrhythms-dev.com",
  desc: "Explore new music, unexpected genres, and local venues.",
  title: "Random Rhythms",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: true,
  svg: true,
  width: 400,
  height: 46,
}

// This coordinates to the default distance (in miles) used by the API for
// searches from the zip code.
export const DEFAULT_DISTANCE = "50";

export const DEFUALT_MAX_COST = "200";
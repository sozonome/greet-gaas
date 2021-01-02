import { OccasionTemplateType } from "./types";

export const OccasionTemplates: Array<OccasionTemplateType> = [
  {
    type: "new-year",
    title: "Happy New Year!",
    imageSrc: [
      "/new-year/Happy New Year-pana.svg",
      "/new-year/Happy New Year-cuate.svg",
      "/new-year/Happy New Year-bro.svg",
      "/new-year/Happy New Year-amico.svg",
      "/new-year/Celebration-rafiki.svg",
      "/new-year/Celebration-pana.svg",
      "/new-year/Celebration-cuate.svg",
      "/new-year/Celebration-bro.svg",
    ],
    assetSource: { name: "Freepik Storyset", url: "https://storyset.com" },
  },
  {
    type: "chinese-new-year",
    title: "Happy Chinese New Year!",
    imageSrc: [
      "/chinese-new-year/People celebrating Chinese New Year-amico.svg",
      "/chinese-new-year/People celebrating Chinese New Year-bro.svg",
      "/chinese-new-year/People celebrating Chinese New Year-cuate.svg",
      "/chinese-new-year/People celebrating Chinese New Year-pana.svg",
      "/chinese-new-year/People celebrating Chinese New Year-rafiki.svg",
    ],
    assetSource: { name: "Freepik Storyset", url: "https://storyset.com" },
    customFont: "Caveat",
  },
  {
    type: "christmas",
    title: "Merry Christmas!",
    imageSrc: [
      "/christmas/Christmas stocking-pana.svg",
      "/christmas/Christmas tree-rafiki.svg",
      "/christmas/Christmas stocking-amico.svg",
    ],
    assetSource: {
      name: "Freepik Storyset",
      url: "https://storyset.com",
    },
  },
];

import { OccassionTemplateType } from "./types";

export const OccassionTemplates: Array<OccassionTemplateType> = [
  {
    type: "new-year",
    title: "Happy New Year!",
    imageSrc: ["/new-year/Happy New Year-pana.svg"],
    assetSource: { name: "Freepik Storyset", url: "https://storyset.com" },
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

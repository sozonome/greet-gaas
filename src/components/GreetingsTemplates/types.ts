export enum Occassions {
  "new-year",
  // "chinese-new-year",
  // "ramadhan",
  "christmas",
}

export type OccassionsKeyType = keyof typeof Occassions;

export type OccassionTemplateType = {
  type: OccassionsKeyType;
  title: string;
  imageSrc: Array<string>;
  subTitle?: string;
  assetSource?: {
    name: string;
    url?: string;
  };
};

/**
 * occassions type mapped
 */
export const occassions: Array<OccassionsKeyType> = Object.keys(Occassions)
  .filter((key: string) => Number.isNaN(Number(key)))
  .map((rawOccassion: OccassionsKeyType) => rawOccassion);

/**
 * transformed occassions key into text
 */
export const occassionsText: Array<string> = occassions.map(
  (occassion: OccassionsKeyType) => occassion.replace(/-/g, " ")
);

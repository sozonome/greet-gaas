export enum Occasions {
  "new-year",
  "chinese-new-year",
  "christmas",
}

export type OccasionsKeyType = keyof typeof Occasions;

export type OccasionTemplateType = {
  type: OccasionsKeyType;
  title: string;
  imageSrc: Array<string>;
  subTitle?: string;
  assetSource?: {
    name: string;
    url?: string;
  };
  customFont?: string;
};

/**
 * occasions type mapped
 */
export const occasions: Array<OccasionsKeyType> = Object.keys(Occasions)
  .filter((key: string) => Number.isNaN(Number(key)))
  .map((rawOccasion: OccasionsKeyType) => rawOccasion);

/**
 * transformed occasions key into text
 */
export const occasionsText: Array<string> = occasions.map(
  (occasion: OccasionsKeyType) => occasion.replace(/-/g, " ")
);

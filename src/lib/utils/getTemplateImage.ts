import { occasionTemplates } from "lib/components/GreetingsTemplates/templates";
import {
  OccasionsKeyType,
  OccasionTemplateType,
} from "lib/components/GreetingsTemplates/types";

export const getTemplateImage = (occasion: OccasionsKeyType) => {
  const selectedOccasionTemplate: OccasionTemplateType = occasionTemplates.find(
    ({ type }) => type === occasion
  );
  const randomImageNum = Math.floor(
    Math.random() * selectedOccasionTemplate.imageSrc.length
  );

  return selectedOccasionTemplate.imageSrc[randomImageNum];
};

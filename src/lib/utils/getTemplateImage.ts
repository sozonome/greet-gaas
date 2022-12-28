import { occasionTemplates } from "lib/components/GreetingsTemplates/templates";
import {
  OccasionsKeyType,
  OccasionTemplateType,
} from "lib/components/GreetingsTemplates/types";
import crypto from "crypto";

export const getTemplateImage = (occasion: OccasionsKeyType) => {
  const selectedOccasionTemplate: OccasionTemplateType = occasionTemplates.find(
    ({ type }) => type === occasion
  );
  const randomImageNum = crypto.randomInt(
    selectedOccasionTemplate.imageSrc.length
  );

  return selectedOccasionTemplate.imageSrc[randomImageNum];
};

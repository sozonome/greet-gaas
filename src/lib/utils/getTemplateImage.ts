import crypto from 'crypto';

import { occasionTemplates } from '@/lib/components/GreetingsTemplates/templates';
import type { OccasionsKeyType } from '@/lib/components/GreetingsTemplates/types';

export const getTemplateImage = (occasion: OccasionsKeyType) => {
  const selectedOccasionTemplate = occasionTemplates.find(
    ({ type }) => type === occasion
  );
  const randomImageNum = crypto.randomInt(
    selectedOccasionTemplate?.imageSrc.length ?? 1
  );

  return selectedOccasionTemplate?.imageSrc?.[randomImageNum];
};

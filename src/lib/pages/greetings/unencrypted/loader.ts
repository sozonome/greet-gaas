import { occasionTemplates } from "lib/components/GreetingsTemplates/templates";
import { GetServerSideProps } from "next";

import type { OccasionsKeyType } from "lib/components/GreetingsTemplates/types";

import type {
  UnencryptedGreetingPageParams,
  UnencryptedGreetingPageProps,
} from "./types";
import { getTemplateImage } from "lib/utils/getTemplateImage";

export const getServerSideProps: GetServerSideProps<
  UnencryptedGreetingPageProps,
  UnencryptedGreetingPageParams
> = async (ctx) => {
  const { query, params } = ctx;

  const occasion = params.occasion as string;

  const isValidOccassion = occasionTemplates
    .map((template) => template.type as string)
    .includes(occasion);

  if (!isValidOccassion) {
    return {
      notFound: true,
    };
  }

  const imageSrc = getTemplateImage(occasion as OccasionsKeyType);

  return {
    props: {
      name: query.name as string,
      message: query.message as string,
      from: query.from as string,
      occasion: occasion as OccasionsKeyType,
      imageSrc,
    },
  };
};

import { occasionTemplates } from "lib/components/GreetingsTemplates/templates";
import { GetServerSideProps } from "next";

import type {
  OccasionsKeyType,
  OccasionTemplateType,
} from "lib/components/GreetingsTemplates/types";
import { decryptText } from "lib/utils/decryptText";

import type {
  EncryptedGreetingPageParams,
  EncryptedGreetingPageProps,
} from "./types";
import { getTemplateImage } from "lib/utils/getTemplateImage";

export const getServerSideProps: GetServerSideProps<
  EncryptedGreetingPageProps,
  EncryptedGreetingPageParams
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

  const decryptedName = query.name
    ? decryptText(query.name as string)
    : undefined;
  const decryptedMessage = query.message
    ? decryptText(query.message as string)
    : undefined;
  const decryptedFrom = query.from
    ? decryptText(query.from as string)
    : undefined;
  const imageSrc = getTemplateImage(occasion as OccasionsKeyType);

  return {
    props: {
      name: decryptedName,
      message: decryptedMessage,
      from: decryptedFrom,
      occasion: occasion as OccasionsKeyType,
      imageSrc,
    },
  };
};

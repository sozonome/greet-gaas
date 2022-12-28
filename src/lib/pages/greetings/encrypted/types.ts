import { GreetingsTemplateProps } from "lib/components/GreetingsTemplates/types";

export type EncryptedGreetingPageProps = GreetingsTemplateProps;

export type EncryptedGreetingPageParams = Pick<
  GreetingsTemplateProps,
  "occasion"
>;

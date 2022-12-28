import type { GreetingsTemplateProps } from "lib/components/GreetingsTemplates/types";

export type UnencryptedGreetingPageProps = GreetingsTemplateProps;

export type UnencryptedGreetingPageParams = Pick<
  GreetingsTemplateProps,
  "occasion"
>;

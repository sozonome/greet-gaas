import GreetingsTemplate from "lib/components/GreetingsTemplates";
import type { GreetingsTemplateProps } from "lib/components/GreetingsTemplates/types";

import type { UnencryptedGreetingPageProps } from "./types";

/**
 * @deprecated
 * enforced using encrypted by default
 */
const UnencryptedGreetingPage = (props: UnencryptedGreetingPageProps) => {
  const greetingTemplatesProps: GreetingsTemplateProps = props;

  return <GreetingsTemplate {...greetingTemplatesProps} />;
};

export default UnencryptedGreetingPage;

import GreetingsTemplate from "lib/components/GreetingsTemplates";
import { GreetingsTemplateProps } from "lib/components/GreetingsTemplates/types";
import { UnencryptedGreetingPageProps } from "./types";

/**
 * @deprecated
 * enforced using encrypted by default
 */
const UnencryptedGreetingPage = (props: UnencryptedGreetingPageProps) => {
  const greetingTemplatesProps: GreetingsTemplateProps = props;

  return <GreetingsTemplate {...greetingTemplatesProps} />;
};

export default UnencryptedGreetingPage;

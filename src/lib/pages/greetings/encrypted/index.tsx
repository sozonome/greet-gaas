import GreetingsTemplate from "lib/components/GreetingsTemplates";
import { GreetingsTemplateProps } from "lib/components/GreetingsTemplates/types";

import { EncryptedGreetingPageProps } from "./types";

const EncryptedGreetingPage = (props: EncryptedGreetingPageProps) => {
  const greetingTemplatesProps: GreetingsTemplateProps = props;

  return <GreetingsTemplate {...greetingTemplatesProps} />;
};

export default EncryptedGreetingPage;

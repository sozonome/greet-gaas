import { useRouter } from "next/router";

import GreetingsTemplate, {
  GreetingsTemplateProps,
} from "lib/components/GreetingsTemplates";
import { OccasionsKeyType } from "lib/components/GreetingsTemplates/types";

/**
 * @todo plan to deprecate
 * will deprecate this page / replace this with enc if want to enforce encryption
 */
const UnencryptedGreetingPage = () => {
  const router = useRouter();

  const {
    query: { occasion, name, message, from },
  } = router;

  const greetingTemplatesProps: GreetingsTemplateProps = {
    occasion: occasion as OccasionsKeyType,
    name: name ? decodeURI(name as string) : undefined,
    message: message ? decodeURI(message as string) : undefined,
    from: from ? decodeURI(from as string) : undefined,
  };

  return <GreetingsTemplate {...greetingTemplatesProps} />;
};

export default UnencryptedGreetingPage;

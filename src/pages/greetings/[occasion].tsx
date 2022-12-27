import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";

import GreetingsTemplate, {
  GreetingsTemplateProps,
} from "../../components/GreetingsTemplates";
import { OccasionsKeyType } from "../../components/GreetingsTemplates/types";

/**
 * @todo plan to deprecate
 * will deprecate this page / replace this with enc if want to enforce encryption
 */
const GreetingPage = () => {
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

  return (
    <Box>
      <Head>
        <title>Hello {name} | Greeting as a Service</title>
      </Head>
      <GreetingsTemplate {...greetingTemplatesProps} />
    </Box>
  );
};

export default GreetingPage;

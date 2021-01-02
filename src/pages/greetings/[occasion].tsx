import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";

import GreetingsTemplate, {
  GreetingsTemplateProps,
} from "../../components/GreetingsTemplates";
import { OccasionsKeyType } from "../../components/GreetingsTemplates/types";

const GreetingPage = () => {
  const router = useRouter();

  const {
    query: { occasion, name, message, from },
  } = router;

  const greetingTemplatesProps: GreetingsTemplateProps = {
    occasion: occasion as OccasionsKeyType,
    name: unescape(name as string),
    message: message ? unescape(message as string) : undefined,
    from: from ? unescape(from as string) : undefined,
  };

  return (
    <Box>
      <Head>
        <title>Hello {name} | Greeting as a Service</title>
      </Head>
      {console.log({ greetingTemplatesProps })}
      <GreetingsTemplate {...greetingTemplatesProps} />
    </Box>
  );
};

export default GreetingPage;

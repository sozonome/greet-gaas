import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import CryptoJS from "crypto-js";

import GreetingsTemplate, {
  GreetingsTemplateProps,
} from "../../../components/GreetingsTemplates";
import { OccasionsKeyType } from "../../../components/GreetingsTemplates/types";

const GreetingPage = () => {
  const router = useRouter();

  const {
    query: { occasion, name, message, from },
  } = router;

  const decryptString = (text: string) => {
    return CryptoJS.AES.decrypt(
      unescape(text)
        .replace("xMl3Jk", "+")
        .replace("Por21Ld", "/")
        .replace("Ml32", "="),
      process.env.NEXT_PUBLIC_SECRET_PASSPHRASE
    ).toString(CryptoJS.enc.Utf8);
  };

  const greetingTemplatesProps: GreetingsTemplateProps = {
    occasion: occasion as OccasionsKeyType,
    name: name ? decryptString(name as string) : undefined,
    message: message ? decryptString(message as string) : undefined,
    from: from ? decryptString(from as string) : undefined,
  };

  return (
    <Box>
      <Head>
        <title>
          Hello {greetingTemplatesProps.name} | Greeting as a Service
        </title>
      </Head>
      <GreetingsTemplate {...greetingTemplatesProps} />
    </Box>
  );
};

export default GreetingPage;

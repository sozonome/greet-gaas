import { useRouter } from "next/router";

import GreetingsTemplate, {
  GreetingsTemplateProps,
} from "lib/components/GreetingsTemplates";
import { OccasionsKeyType } from "lib/components/GreetingsTemplates/types";
import axios from "axios";
import { useEffect, useState } from "react";

const EncryptedGreetingPage = () => {
  const router = useRouter();
  const {
    query: { occasion, name: qName, message: qMessage, from: qFrom },
  } = router;

  const decryptText = async (text: string) =>
    await axios(`/api/decrypt`, { params: { text } }).then((res) => res.data);

  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [from, setFrom] = useState<string>("");

  useEffect(() => {
    if (qName) {
      decryptText(qName as string).then((dName) => {
        setName(dName);
      });
    }
    if (qMessage) {
      decryptText(qMessage as string).then((dMessage) => {
        setMessage(dMessage);
      });
    }
    if (qFrom) {
      decryptText(qFrom as string).then((dFrom) => {
        setFrom(dFrom);
      });
    }
  }, [qName, qMessage, qFrom]);

  const greetingTemplatesProps: GreetingsTemplateProps = {
    occasion: occasion as OccasionsKeyType,
    name,
    message,
    from,
  };

  return <GreetingsTemplate {...greetingTemplatesProps} />;
};

export default EncryptedGreetingPage;

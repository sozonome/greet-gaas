import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

import GreetingsTemplate, {
  GreetingsTemplateProps,
} from "../../components/GreetingsTemplates";
import { OccassionsKeyType } from "../../components/GreetingsTemplates/types";

const GreetingPage = () => {
  const router = useRouter();

  const {
    query: { occassion, name, message },
  } = router;

  const greetingTemplatesProps: GreetingsTemplateProps = {
    occassion: occassion as OccassionsKeyType,
    name: name as string,
    message: message as string,
  };

  return (
    <Box>
      <GreetingsTemplate {...greetingTemplatesProps} />
    </Box>
  );
};

export default GreetingPage;

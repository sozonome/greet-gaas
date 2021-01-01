import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

import GreetingsTemplate from "../../components/GreetingsTemplates";
import { OccassionsKeyType } from "../../components/GreetingsTemplates/types";

const GreetingPage = () => {
  const router = useRouter();

  const {
    query: { occassion, name },
  } = router;

  return (
    <Box>
      <GreetingsTemplate
        occassion={occassion as OccassionsKeyType}
        name={name as string}
      />
    </Box>
  );
};

export default GreetingPage;

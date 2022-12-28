import { Flex, Heading, Box, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";

import AppMenu from "./AppMenu";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const router = useRouter();
  const { pathname } = router;

  const isGreetingPage = router.pathname.indexOf("greetings") > -1;

  return (
    <Flex alignSelf="start" as="header" width="full" align="center">
      <Link href="/">
        <Heading
          as="h1"
          letterSpacing={2}
          fontSize={isGreetingPage ? "lg" : "3xl"}
          fontStyle="italic"
        >
          GaaS
        </Heading>
        <Text fontSize="xs">Greetings as a Service</Text>
      </Link>

      <Box marginLeft="auto">
        <ThemeToggle />
        <AppMenu />
      </Box>
    </Flex>
  );
};

export default Header;

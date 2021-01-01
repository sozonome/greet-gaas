import { Flex, Heading, Box, Text } from "@chakra-ui/react";

import AccessibleLink from "../AccessibleLink";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <Flex as="header" width="full" align="center">
      <AccessibleLink href="/">
        <Heading as="h1" letterSpacing={2} fontStyle="italic">
          GaaS
        </Heading>
        <Text>Greetings as a Service</Text>
      </AccessibleLink>

      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;

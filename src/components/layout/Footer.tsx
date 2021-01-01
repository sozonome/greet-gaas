import { Box, Grid, Link, Text } from "@chakra-ui/react";
import Badges from "./Badges";

const Footer = () => {
  return (
    <Grid
      as="footer"
      width="full"
      textAlign={["center", "center", "inherit"]}
      templateColumns={["repeat(1)", "repeat(1)", "repeat(2, 1fr)"]}
      alignItems="center"
    >
      <Text fontSize="sm">
        2021 |{" "}
        <Link fontWeight="bold" href="https://sznm.dev" isExternal>
          sznm.dev
        </Link>
      </Text>

      <Box textAlign={["center", "center", "right"]}>
        <Badges />
      </Box>
    </Grid>
  );
};

export default Footer;

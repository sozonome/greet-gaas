import { theme, extendTheme } from "@chakra-ui/react";

import { fonts } from "./fonts";
import { config } from "./config";
import { components } from "./components";

const customTheme = extendTheme({
  fonts,
  components,
  config,
});

export default customTheme;

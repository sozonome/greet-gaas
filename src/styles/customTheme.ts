import { theme, extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  fonts: {
    ...theme.fonts,
    heading: "Abril Fatface, serif",
    body: "Inter, sans-serif",
  },
  colors: {
    ...theme.colors,
    /** Example */
    // teal: {
    //   ...theme.colors.teal,
    //   700: "#005661",
    //   500: "#00838e",
    //   300: "#4fb3be",
    // },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 24,
      },
    },
  },
});

export default customTheme;

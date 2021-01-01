import { Box, Grid } from "@chakra-ui/react";

import Header from "./Header";
import Footer from "./Footer";
import Meta from "./Meta";

const Layout = ({ children }) => {
  return (
    <Box transition="0.5s ease-out">
      <Meta />
      <Grid
        alignItems="center"
        padding="8"
        marginX="auto"
        maxWidth={800}
        minHeight="100vh"
      >
        <Header />
        <Box as="main" marginY={22}>
          {children}
        </Box>
        <Footer />
      </Grid>
    </Box>
  );
};

export default Layout;

import { Box, Grid } from "@chakra-ui/react";

import Footer from "./Footer";
import Header from "./Header";
import Meta from "./Meta";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
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

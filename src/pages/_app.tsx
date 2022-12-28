import { DefaultSeo } from "next-seo";

import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";

import Layout from "lib/layout";

import defaultSEOConfig from "../../next-seo.config";

import customTheme from "lib/styles/theme";
import "lib/styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={customTheme}>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <DefaultSeo {...defaultSEOConfig} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default MyApp;

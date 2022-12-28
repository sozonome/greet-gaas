import {
  Button,
  Grid,
  Heading,
  Image,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";

const Home = () => {
  return (
    <Grid gap={8} marginY={[8, 16]} w="full" textAlign="center">
      <Heading letterSpacing={1} size="2xl" fontWeight="extrabold">
        Create Greetings for your Folks!
      </Heading>
      <Image
        marginX="auto"
        width={[200, 240, 280]}
        src="/High five-cuate.svg"
        alt="illustration"
      />
      <ChakraLink fontSize="xs" isExternal href="https://storyset.com/">
        Illustration by Freepik Storyset
      </ChakraLink>

      <Button
        as={Link}
        href="/create"
        size="lg"
        marginX={[0, 16, 32]}
        colorScheme="blue"
      >
        Create One
      </Button>
    </Grid>
  );
};

export default Home;

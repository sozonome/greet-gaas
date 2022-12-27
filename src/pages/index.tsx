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
    <Grid gap={12} marginY={[8, 16]} w="full" textAlign="center">
      <Heading letterSpacing={1} fontWeight="extrabold">
        Create Greetings for your Folks!
      </Heading>
      <Image
        marginX="auto"
        width={[240, 320, 400]}
        src="/High five-cuate.svg"
        alt="illustration"
      />
      <ChakraLink fontSize="xs" isExternal href="https://storyset.com/">
        Illustration by Freepik Storyset
      </ChakraLink>

      <Button as={Link} href="/create" size="lg" marginX={[0, 16, 32]}>
        Create One
      </Button>
    </Grid>
  );
};

export default Home;

import {
  Button,
  Grid,
  Heading,
  Image,
  Link as ChakraLink,
  Text,
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

      <Link href="/create" passHref>
        <Button as="a" size="lg" marginX={[0, 16, 32]}>
          Create One
        </Button>
      </Link>
    </Grid>
  );
};

export default Home;

import { Button, Grid, Heading, Image } from "@chakra-ui/react";
import Link from "next/link";

const Home = () => {
  return (
    <Grid gap={12} marginY={[8, 16]} w="full">
      <Heading letterSpacing={1} textAlign="center" fontWeight="extrabold">
        Create Greetings for your Folks!
      </Heading>
      <Image marginX={[0, 16, 32]} src="/High five-cuate.svg" />
      <Link href="/create">
        <Button size="lg" marginX={[0, 16, 32]}>
          Create One
        </Button>
      </Link>
    </Grid>
  );
};

export default Home;

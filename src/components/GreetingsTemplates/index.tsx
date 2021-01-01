import { Grid, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";

import { OccassionTemplates } from "./templates";

import { OccassionsKeyType, OccassionTemplateType } from "./types";

export type GreetingsTemplateProps = {
  occassion?: OccassionsKeyType;
  name?: string;
  message?: string;
};

const GreetingsTemplate = ({
  occassion,
  name,
  message,
}: GreetingsTemplateProps) => {
  if (!occassion) {
    return null;
  }

  return (
    <Grid textAlign="center" gap={2}>
      <Text fontSize="lg">
        Hello{" "}
        <Text as="span" textTransform="capitalize">
          {name}
        </Text>
        ,
      </Text>

      <OccassionWrapper occassion={occassion} />

      {message && <Text fontSize="sm">{message}</Text>}
    </Grid>
  );
};

type OccassionWrapperProps = Pick<GreetingsTemplateProps, "occassion">;

const OccassionWrapper = ({ occassion }: OccassionWrapperProps) => {
  const selectedOccassionTemplate: OccassionTemplateType = OccassionTemplates.find(
    ({ type }) => type === occassion
  );

  const router = useRouter();

  if (!selectedOccassionTemplate) {
    router.push("/404");
    return;
  }

  return (
    <Grid gap={4} marginX={[0, 16, 32]}>
      <Heading>{selectedOccassionTemplate.title}</Heading>

      <Image
        src={selectedOccassionTemplate.imageSrc}
        width={400}
        height={400}
      />
    </Grid>
  );
};

export default GreetingsTemplate;

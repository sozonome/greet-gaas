import { Button, Grid, Heading, Link, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import MotionBox from "../MotionBox";

import { OccasionTemplates } from "./templates";

import { OccasionsKeyType, OccasionTemplateType } from "./types";

export type GreetingsTemplateProps = {
  occasion?: OccasionsKeyType;
  name?: string;
  message?: string;
};

const GreetingsTemplate = ({
  occasion,
  name,
  message,
}: GreetingsTemplateProps) => {
  if (!occasion) {
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

      <OccasionWrapper occasion={occasion} />

      {message && <Text fontSize="sm">{message}</Text>}
    </Grid>
  );
};

type OccasionWrapperProps = Pick<GreetingsTemplateProps, "occasion">;

const OccasionWrapper = ({ occasion }: OccasionWrapperProps) => {
  const selectedOccasionTemplate: OccasionTemplateType = OccasionTemplates.find(
    ({ type }) => type === occasion
  );

  const router = useRouter();

  if (!selectedOccasionTemplate) {
    router.push("/404");
    return;
  }

  const randomImageNum = Math.floor(
    Math.random() * selectedOccasionTemplate.imageSrc.length
  );

  return (
    <Grid gap={4} marginX={[0, 16, 32]} marginBottom={8}>
      <Heading>{selectedOccasionTemplate.title}</Heading>

      <MotionBox
        animate={{ y: 20 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
      >
        <Image
          src={selectedOccasionTemplate.imageSrc[randomImageNum]}
          width={400}
          height={400}
        />
      </MotionBox>

      {selectedOccasionTemplate.assetSource &&
        (selectedOccasionTemplate.assetSource.url ? (
          <Link
            href={selectedOccasionTemplate.assetSource.url}
            isExternal
            fontSize="xs"
          >
            Illlustration by {selectedOccasionTemplate.assetSource.name}
          </Link>
        ) : (
          <Text fontSize="xs">
            Illustration by {selectedOccasionTemplate.assetSource.name}
          </Text>
        ))}
    </Grid>
  );
};

export default GreetingsTemplate;

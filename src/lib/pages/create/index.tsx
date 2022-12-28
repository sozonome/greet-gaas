/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable sonarjs/no-nested-template-literals */
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  Heading,
  Image,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Spinner,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import type { FormikErrors } from "formik";
import { useFormik } from "formik";
import { useState } from "react";

import {
  occasions,
  occasionsText,
} from "lib/components/GreetingsTemplates/types";

type CreateFormType = {
  name: string;
  occasion: string;
  customMessage?: string;
  from?: string;
  isEncrypted?: boolean;
};

const defaultErrorMessage = "invalid characters";

const Create = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const [generatedUrl, setGeneratedUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const {
    values: { name, occasion, customMessage, from, isEncrypted },
    errors,
    dirty,
    handleChange,
    handleSubmit,
  } = useFormik<CreateFormType>({
    initialValues: {
      name: "",
      occasion: "",
      customMessage: "",
      from: "",
      isEncrypted: true,
    },
    validate: (formValues: CreateFormType) => {
      const formErrors: FormikErrors<CreateFormType> = {};
      if (formValues.name === "") {
        formErrors.name = "Name must be filled";
      }
      if (formValues.name.indexOf("script") > -1) {
        formErrors.name = defaultErrorMessage;
      }
      if (formValues.customMessage.indexOf("script") > -1) {
        formErrors.customMessage = defaultErrorMessage;
      }
      if (formValues.from.indexOf("script") > -1) {
        formErrors.from = defaultErrorMessage;
      }

      if (formValues.occasion === "") {
        errors.occasion = "Occasion must be picked";
      }

      return formErrors;
    },
    onSubmit: async () => {
      setLoading(isEncrypted);
      onOpen();
      const updateGeneratedUrl = await greetingRoute();
      setGeneratedUrl(updateGeneratedUrl);
      setLoading(false);
    },
  });

  const encryptText = async (text: string) =>
    axios("/api/encrypt", { params: { text } }).then((res) => res.data);

  const processString = async (text: string) =>
    decodeURI(isEncrypted ? await encryptText(text) : text);

  const greetingRoute = async () => {
    return `/greetings/${
      isEncrypted ? "enc/" : ""
    }${occasion}?name=${await processString(name)}${
      customMessage ? `&message=${await processString(customMessage)}` : ""
    }${from ? `&from=${await processString(from)}` : ""}`;
  };

  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(
        `${document.location.protocol}//${document.location.host}${generatedUrl}`
      )
      .then(() => {
        toast({
          description: "Link Copied! Now you just have to share it!",
          status: "success",
          position: "top",
          isClosable: true,
        });
      });
  };

  const handleRoutePreview = () => {
    window.open(generatedUrl, "_blank");
  };

  return (
    <Grid gap={6}>
      <Heading letterSpacing={1}>Create a Greeting</Heading>

      <FormControl isRequired>
        <Select
          placeholder="what's the occasion?"
          name="occasion"
          onChange={handleChange}
          size="lg"
          value={occasion}
          textTransform="capitalize"
          errorBorderColor="crimson"
          isInvalid={!!errors?.occasion}
        >
          {occasionsText.map((occasionText: string, index: number) => {
            return (
              <Text
                style={{ textTransform: "capitalize" }}
                key={occasionText}
                as="option"
                value={occasions[index]}
              >
                {occasionText}
              </Text>
            );
          })}
        </Select>
        {errors?.occasion && (
          <FormHelperText color="crimson">{errors.occasion}</FormHelperText>
        )}
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          placeholder="who do you want to sent it for?"
          value={name}
          name="name"
          errorBorderColor="crimson"
          isInvalid={!!errors?.name}
          onChange={handleChange}
        />
        {errors?.name && (
          <FormHelperText color="crimson">{errors.name}</FormHelperText>
        )}
      </FormControl>

      <FormControl>
        <FormLabel>Custom Message</FormLabel>
        <Input
          type="text"
          placeholder="any custom message?"
          value={customMessage}
          name="customMessage"
          errorBorderColor="crimson"
          isInvalid={!!errors?.customMessage}
          onChange={handleChange}
        />
        {errors?.customMessage && (
          <FormHelperText color="crimson">
            {errors.customMessage}
          </FormHelperText>
        )}
      </FormControl>

      <FormControl>
        <FormLabel>From</FormLabel>
        <Input
          type="text"
          placeholder="wanna include your name as a sender?"
          value={from}
          name="from"
          errorBorderColor="crimson"
          isInvalid={!!errors?.from}
          onChange={handleChange}
        />
        {errors?.from && (
          <FormHelperText color="crimson">{errors.from}</FormHelperText>
        )}
      </FormControl>

      <Button
        disabled={!dirty || (dirty && Object.keys(errors).length > 0)}
        onClick={() => handleSubmit()}
        colorScheme="green"
      >
        Generate!
      </Button>

      <Modal isOpen={isOpen} isCentered onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{loading ? "Please Wait..." : "Nice!"}</ModalHeader>
          <ModalCloseButton />
          <ModalBody textAlign="center">
            {loading ? (
              <Spinner size="lg" textAlign="center" />
            ) : (
              <Grid gap={4}>
                <Box>
                  <Image src="/Online friends-pana.svg" alt="illustration" />
                  <Link fontSize="xs" isExternal href="https://storyset.com/">
                    Illustration by Freepik Storyset
                  </Link>
                </Box>

                <Text>Here is the greeting page generated:</Text>

                <Button onClick={handleCopyLink} colorScheme="teal">
                  Copy Link
                </Button>

                <Button onClick={handleRoutePreview} colorScheme="yellow">
                  Preview
                </Button>
              </Grid>
            )}
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Back</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Grid>
  );
};

export default Create;

import {
  Box,
  Button,
  Checkbox,
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
import { FormikErrors, useFormik } from "formik";
import axios from "axios";
import { useState } from "react";

import { occasions, occasionsText } from "components/GreetingsTemplates/types";

type CreateFormType = {
  name: string;
  occasion: string;
  customMessage?: string;
  from?: string;
  isEncrypted?: boolean;
};

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
      isEncrypted: false,
    },
    validate: (formValues: CreateFormType) => {
      const errors: FormikErrors<CreateFormType> = {};
      if (formValues.name === "") {
        errors.name = "Name must be filled";
      }
      if (formValues.name.indexOf("script") > -1) {
        errors.name = "invalid characters";
      }
      if (formValues.customMessage.indexOf("script") > -1) {
        errors.customMessage = "invalid characters";
      }
      if (formValues.from.indexOf("script") > -1) {
        errors.from = "invalid characters";
      }

      if (formValues.occasion === "") {
        errors.occasion = "Occasion must be picked";
      }

      return errors;
    },
    onSubmit: async () => {
      isEncrypted ? setLoading(true) : setLoading(false);
      onOpen();
      const updateGeneratedUrl = await greetingRoute();
      setGeneratedUrl(updateGeneratedUrl);
      setLoading(false);
    },
  });

  const encryptText = async (text: string) =>
    await axios("/api/encrypt", { params: { text } }).then((res) => res.data);

  const processString = async (text: string) =>
    escape(isEncrypted ? await encryptText(text) : text);

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
    <Grid gap={8}>
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
          isInvalid={errors?.occasion ? true : false}
        >
          {occasionsText.map((occasion: string, index: number) => {
            return (
              <Text
                style={{ textTransform: "capitalize" }}
                key={index}
                as="option"
                value={occasions[index]}
              >
                {occasion}
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
          isInvalid={errors?.name ? true : false}
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
          isInvalid={errors?.customMessage ? true : false}
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
          isInvalid={errors?.from ? true : false}
          onChange={handleChange}
        />
        {errors?.from && (
          <FormHelperText color="crimson">{errors.from}</FormHelperText>
        )}
      </FormControl>

      <FormControl>
        <Checkbox
          checked={isEncrypted}
          name="isEncrypted"
          onChange={handleChange}
        >
          Please encrypt this message
        </Checkbox>
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

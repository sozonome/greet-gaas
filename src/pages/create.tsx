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
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { FormikErrors, useFormik } from "formik";

import {
  occassions,
  occassionsText,
} from "../components/GreetingsTemplates/types";

type CreateFormType = {
  name: string;
  occassion: string;
  customMessage?: string;
};

const Create = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const {
    values: { name, occassion, customMessage },
    errors,
    dirty,
    handleChange,
    handleSubmit,
  } = useFormik<CreateFormType>({
    initialValues: {
      name: "",
      occassion: "",
      customMessage: "",
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
      if (formValues.occassion === "") {
        errors.occassion = "Occassion must be picked";
      }

      return errors;
    },
    onSubmit: () => {
      onOpen();
    },
  });

  const greetingRoute = `/greetings/${occassion}?name=${escape(name)}${
    customMessage ? `&message=${escape(customMessage)}` : ""
  }`;

  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(
        `${document.location.protocol}//${document.location.host}${greetingRoute}`
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
    window.open(greetingRoute, "_blank");
  };

  return (
    <Grid gap={8}>
      <Heading letterSpacing={1}>Create a Greeting</Heading>

      <FormControl isRequired>
        <Select
          placeholder="Select Ocassion"
          name="occassion"
          onChange={handleChange}
          size="lg"
          value={occassion}
          textTransform="capitalize"
          errorBorderColor="crimson"
          isInvalid={errors?.occassion ? true : false}
        >
          {occassionsText.map((occassion: string, index: number) => {
            return (
              <Text
                style={{ textTransform: "capitalize" }}
                key={index}
                as="option"
                value={occassions[index]}
              >
                {occassion}
              </Text>
            );
          })}
        </Select>
        {errors?.occassion && (
          <FormHelperText color="crimson">{errors.occassion}</FormHelperText>
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
          <ModalHeader>Nice!</ModalHeader>
          <ModalCloseButton />
          <ModalBody textAlign="center">
            <Grid gap={4}>
              <Box>
                <Image src="/Online friends-pana.svg" />
                <Link
                  fontSize="xs"
                  isExternal
                  href="https://storyset.com/"
                >
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

import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
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
};

const Create = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const {
    values: { name, occassion },
    errors,
    dirty,
    handleChange,
    handleSubmit,
  } = useFormik<CreateFormType>({
    initialValues: {
      name: "",
      occassion: "",
    },
    validate: (formValues: CreateFormType) => {
      const errors: FormikErrors<CreateFormType> = {};
      if (formValues.name === "") {
        errors.name = "Name must be filled";
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

  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(
        `${document.location.protocol}//${document.location.host}/greetings/${occassion}?name=${name}`
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
    window.open(`/greetings/${occassion}?name=${name}`, "_blank");
  };

  return (
    <Grid gap={8}>
      <Heading letterSpacing={1}>Create a Greeting</Heading>

      <Select
        placeholder="Select Ocassion"
        name="occassion"
        onChange={handleChange}
        size="lg"
        value={occassion}
        textTransform="capitalize"
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

      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          placeholder="who do you want to sent it for?"
          value={name}
          name="name"
          errorBorderColor="vermilion"
          onChange={handleChange}
        />
        {errors?.name && <FormErrorMessage>{errors.name}</FormErrorMessage>}
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
              <Image src="/Online friends-pana.svg" />

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

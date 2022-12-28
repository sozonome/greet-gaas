import type {
  FormControlProps,
  FormErrorMessageProps,
  FormLabelProps,
  SkeletonProps,
} from "@chakra-ui/react";
import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Skeleton,
} from "@chakra-ui/react";
import type { ReactNode } from "react";

export type FormControlWrapperProps = {
  label?: FormLabelProps["children"];
  errorText?: FormErrorMessageProps["children"];
  errorTextColor?: FormErrorMessageProps["color"];
  isLoaded?: SkeletonProps["isLoaded"];
  children?: ReactNode;
} & Pick<FormControlProps, "isInvalid" | "isRequired">;

const FormControlWrapper = ({
  label,
  errorText,
  errorTextColor,
  isInvalid,
  isRequired,
  isLoaded = true,
  children,
}: FormControlWrapperProps) => {
  return (
    <FormControl isInvalid={isInvalid || !!errorText} isRequired={isRequired}>
      <Flex alignItems="start">{label && <FormLabel>{label}</FormLabel>}</Flex>

      <Skeleton isLoaded={isLoaded}>
        {children}

        {errorText && (
          <FormErrorMessage color={errorTextColor}>
            {errorText}
          </FormErrorMessage>
        )}
      </Skeleton>
    </FormControl>
  );
};

export default FormControlWrapper;

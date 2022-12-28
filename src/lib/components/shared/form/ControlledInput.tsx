import type {
  InputAddonProps,
  InputElementProps,
  InputProps,
} from "@chakra-ui/react";
import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightAddon,
  InputRightElement,
} from "@chakra-ui/react";
import * as React from "react";

import type { FormControlWrapperProps } from "lib/components/shared/form/FormControlWrapper";
import FormControlWrapper from "lib/components/shared/form/FormControlWrapper";

export type ControlledInputProps = {
  leftElement?: InputElementProps["children"];
  leftAddon?: InputAddonProps["children"];
  rightElement?: InputElementProps["children"];
  rightAddon?: InputAddonProps["children"];
} & FormControlWrapperProps &
  InputProps;

const ControlledInput = React.forwardRef(
  (
    {
      label,
      errorText,
      errorTextColor,
      helperText,
      helperTextColor,
      isInvalid,
      isLoaded,
      isRequired,
      labelAddon,
      leftElement,
      leftAddon,
      rightElement,
      rightAddon,
      ...inputProps
    }: ControlledInputProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const hasAddons = !!(
      leftElement ||
      leftAddon ||
      rightElement ||
      rightAddon
    );

    return (
      <FormControlWrapper
        label={label}
        errorText={errorText}
        errorTextColor={errorTextColor}
        helperText={helperText}
        helperTextColor={helperTextColor}
        isInvalid={isInvalid}
        isRequired={isRequired}
        labelAddon={labelAddon}
        isLoaded={isLoaded}
      >
        {hasAddons ? (
          <InputGroup>
            {leftAddon ? (
              <InputLeftAddon borderRadius={24} paddingX={2}>
                {leftAddon}
              </InputLeftAddon>
            ) : (
              leftElement && <InputLeftElement>{leftElement}</InputLeftElement>
            )}

            <Input ref={ref} {...inputProps} isRequired={isRequired} />

            {rightAddon ? (
              <InputRightAddon borderRadius={24} paddingX={2}>
                {rightAddon}
              </InputRightAddon>
            ) : (
              rightElement && (
                <InputRightElement>{rightElement}</InputRightElement>
              )
            )}
          </InputGroup>
        ) : (
          <Input ref={ref} {...inputProps} isRequired={isRequired} />
        )}
      </FormControlWrapper>
    );
  }
);

ControlledInput.displayName = "ControlledInput";

export default ControlledInput;

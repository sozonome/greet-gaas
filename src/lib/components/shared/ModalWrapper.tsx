import type { ModalProps } from '@chakra-ui/react';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import type * as React from 'react';

export type ModalWrapperProps = Pick<
  ModalProps,
  'isOpen' | 'onClose' | 'closeOnOverlayClick' | 'size'
> & {
  header?: React.ReactNode;
  withCloseButton?: boolean;
  body?: React.ReactNode;
  footer?: React.ReactNode;
};

const ModalWrapper = ({
  isOpen,
  size,
  header,
  withCloseButton = true,
  body,
  footer,
  closeOnOverlayClick = false,
  onClose,
}: ModalWrapperProps) => {
  return (
    <Modal
      isOpen={isOpen}
      size={size}
      onClose={onClose}
      closeOnOverlayClick={closeOnOverlayClick}
      isCentered
    >
      <ModalOverlay />

      <ModalContent margin={6} padding={2} borderRadius={24}>
        {header && (
          <ModalHeader fontWeight="black" fontSize={{ base: '2xl', lg: '3xl' }}>
            {header}
          </ModalHeader>
        )}
        {withCloseButton && <ModalCloseButton />}

        {body && <ModalBody>{body}</ModalBody>}

        {footer && <ModalFooter gridGap={2}>{footer}</ModalFooter>}
      </ModalContent>
    </Modal>
  );
};

export default ModalWrapper;

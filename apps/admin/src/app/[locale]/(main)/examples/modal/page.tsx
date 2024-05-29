'use client';

import { useDisclosure } from '@mono/util';
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from '../../../../../components/ui/Modal';
import { Button } from '@mono/ui';

const ModalExamplePage = () => {
  const { isOpen, onOpen, onClose, setIsOpen } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <ModalHeader>
          <ModalTitle>Modal Title</ModalTitle>
        </ModalHeader>
        <ModalBody>Modal Content</ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ModalExamplePage;

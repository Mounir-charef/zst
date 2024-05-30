import React from 'react';
import { Modal, ModalBody } from '../ui/Modal';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Button } from '@mono/ui';
import ConfirnationModal from './ConfirnationModal';

interface ConfirnationDeleteModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const ConfirnationDeleteModal = ({
  isOpen,
  setIsOpen,
}: ConfirnationDeleteModalProps) => {
  return (
    <ConfirnationModal
      buttonText="Delete"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      isSubmitting={false}
      onSubmit={() => {}}
      variant="destructive"
    />
  );
};

export default ConfirnationDeleteModal;

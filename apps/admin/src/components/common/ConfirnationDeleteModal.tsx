import React from 'react';
import { Modal, ModalBody } from '../ui/Modal';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Button } from '@mono/ui';

interface ConfirnationDeleteModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const ConfirnationDeleteModal = ({
  isOpen,
  setIsOpen,
}: ConfirnationDeleteModalProps) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} className="max-w-sm">
      <ModalBody>
        <div className="text-center">
          <FaRegTrashAlt
            size={48}
            className="text-primary mx-auto mt-4 text-center"
          />
          <h2 className="text-heading mt-4 text-xl font-bold">Delete</h2>
          <p className="text-body px-6 py-2 leading-relaxed">
            Are you sure you want to delete?
          </p>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4">
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button variant="destructive">Delete</Button>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default ConfirnationDeleteModal;

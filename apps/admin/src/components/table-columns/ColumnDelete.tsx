'use client';

import { FaRegTrashAlt } from 'react-icons/fa';
import { useDisclosure } from '@mono/util';
import { ID } from '../../types/common';
import { Modal, ModalBody } from '../ui/Modal';
import { Button } from '../ui/Button';

const ColumnDelete = ({ id }: { id: ID }) => {
  const { isOpen, setIsOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <FaRegTrashAlt
        onClick={onOpen}
        className="text-destructive cursor-pointer"
      />
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
            <Button onClick={onClose}>Cancel</Button>
            <Button variant="danger">Delete</Button>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default ColumnDelete;

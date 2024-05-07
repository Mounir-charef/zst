'use client';

import { ID } from '../../../../../../types/common';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Modal, ModalBody } from '../../../../../../components/ui/Modal';
import { useDisclosure } from '@mono/util';
import { Button } from '../../../../../../components/ui/Button';

const AttributeColumnDelete = ({ id }: { id: ID }) => {
  const { isOpen, setIsOpen, onOpen } = useDisclosure();
  return (
    <>
      <FaRegTrashAlt onClick={onOpen} className="text-danger cursor-pointer" />
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} className="max-w-sm">
        <ModalBody>
          <div className="text-center">
            <FaRegTrashAlt
              size={48}
              className="text-primary text-center mx-auto mt-4"
            />
            <h2 className="mt-4 text-xl font-bold text-heading">Delete</h2>
            <p className="px-6 py-2 leading-relaxed text-body">
              Are you sure you want to delete?
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <Button>Cancel</Button>
            <Button variant="danger">Delete</Button>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AttributeColumnDelete;

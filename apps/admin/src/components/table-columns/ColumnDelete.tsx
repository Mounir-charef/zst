'use client';

import { FaRegTrashAlt } from 'react-icons/fa';
import { useDisclosure } from '@mono/util';
import { ID } from '../../types/common';
import ConfirnationDeleteModal from '../common/ConfirnationDeleteModal';

const ColumnDelete = ({ id }: { id: ID }) => {
  const { isOpen, setIsOpen, onOpen } = useDisclosure();
  return (
    <>
      <FaRegTrashAlt
        onClick={onOpen}
        className="text-destructive cursor-pointer"
      />
      <ConfirnationDeleteModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default ColumnDelete;

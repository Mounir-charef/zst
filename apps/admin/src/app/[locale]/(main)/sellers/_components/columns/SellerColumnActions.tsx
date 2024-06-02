'use client';

import React from 'react';
import { ID } from '../../../../../../types/common';
import { useDisclosure } from '@mono/util';
import SharedTableActionColumn from '../../../../../../components/common/sharedTable/SharedTableActionColumn';
import SharedTableEdit from '../../../../../../components/common/sharedTable/SharedTableEdit';
import routesConfig from '../../../../../../config/routesConfig';
import { DropdownMenuItem } from '@mono/ui';
import ConfirnationDeleteModal from '../../../../../../components/common/ConfirnationDeleteModal';

interface SellerColumnActionsProps {
  id: ID;
}

const SellerColumnActions = ({ id }: SellerColumnActionsProps) => {
  const {
    isOpen: isDeleteModalOpen,
    setIsOpen: setIsDeleteModalOpen,
    onOpen: onDeleteModalOpen,
  } = useDisclosure();
  return (
    <>
      <SharedTableActionColumn>
        <SharedTableEdit href={'#'} />
        <DropdownMenuItem onClick={onDeleteModalOpen}>Delete</DropdownMenuItem>
      </SharedTableActionColumn>
      <ConfirnationDeleteModal
        isOpen={isDeleteModalOpen}
        setIsOpen={setIsDeleteModalOpen}
      />
    </>
  );
};

export default SellerColumnActions;

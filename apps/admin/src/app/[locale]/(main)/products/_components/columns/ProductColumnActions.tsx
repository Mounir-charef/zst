'use client';

import React from 'react';
import SharedTableActionColumn from '../../../../../../components/common/sharedTable/SharedTableActionColumn';
import SharedTableView from '../../../../../../components/common/sharedTable/SharedTableView';
import SharedTableEdit from '../../../../../../components/common/sharedTable/SharedTableEdit';
import routesConfig from '../../../../../../config/routesConfig';
import { ID } from '../../../../../../types/common';
import { useDisclosure } from '@mono/util';
import { DropdownMenuItem } from '@mono/ui';
import ConfirnationDeleteModal from '../../../../../../components/common/ConfirnationDeleteModal';

interface ProductColumnActionsProps {
  id: ID;
}

const ProductColumnActions = ({ id }: ProductColumnActionsProps) => {
  const {
    isOpen: isDeleteModalOpen,
    setIsOpen: setIsDeleteModalOpen,
    onOpen: onDeleteModalOpen,
  } = useDisclosure();
  return (
    <>
      <SharedTableActionColumn>
        <SharedTableView href={'#'} />
        <SharedTableEdit href={routesConfig.editProduct(id)} />
        <DropdownMenuItem onClick={onDeleteModalOpen}>Delete</DropdownMenuItem>
      </SharedTableActionColumn>
      <ConfirnationDeleteModal
        isOpen={isDeleteModalOpen}
        setIsOpen={setIsDeleteModalOpen}
      />
    </>
  );
};

export default ProductColumnActions;

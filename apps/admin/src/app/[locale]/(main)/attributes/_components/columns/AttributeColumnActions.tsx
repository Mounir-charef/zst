'use client';

import { useDisclosure } from '@mono/util';
import SharedTableActionColumn from '../../../../../../components/common/sharedTable/SharedTableActionColumn';
import SharedTableEdit from '../../../../../../components/common/sharedTable/SharedTableEdit';
import { DropdownMenuItem } from '@mono/ui';
import routesConfig from '../../../../../../config/routesConfig';
import ConfirnationDeleteModal from '../../../../../../components/common/ConfirnationDeleteModal';
import { ID } from '../../../../../../types/common';

interface AttributeColumnActionsProps {
  id: ID;
}

const AttributeColumnActions = ({ id }: AttributeColumnActionsProps) => {
  const {
    isOpen: isDeleteModalOpen,
    setIsOpen: setIsDeleteModalOpen,
    onOpen: onDeleteModalOpen,
  } = useDisclosure();
  return (
    <>
      <SharedTableActionColumn>
        <SharedTableEdit href={routesConfig.editAttribute(id)} />
        <DropdownMenuItem onClick={onDeleteModalOpen}>Delete</DropdownMenuItem>
      </SharedTableActionColumn>
      <ConfirnationDeleteModal
        isOpen={isDeleteModalOpen}
        setIsOpen={setIsDeleteModalOpen}
      />
    </>
  );
};

export default AttributeColumnActions;

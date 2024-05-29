'use client';

import { ID } from '../../../../../../types/common';
import SharedTableEdit from '../../../../../../components/common/sharedTable/SharedTableEdit';
import SharedTableActionColumn from '../../../../../../components/common/sharedTable/SharedTableActionColumn';
import { DropdownMenuItem } from '@mono/ui';
import routesConfig from '../../../../../../config/routesConfig';
import ConfirnationDeleteModal from '../../../../../../components/common/ConfirnationDeleteModal';
import { useDisclosure } from '@mono/util';

interface CategoryColumnActionProps {
  id: ID;
}

const CategoryColumnAction = ({ id }: CategoryColumnActionProps) => {
  const {
    isOpen: isDeleteModalOpen,
    setIsOpen: setIsDeleteModalOpen,
    onOpen: onDeleteModalOpen,
  } = useDisclosure();
  return (
    <>
      <SharedTableActionColumn>
        <SharedTableEdit href={routesConfig.editCategory(id)} />
        <DropdownMenuItem onClick={onDeleteModalOpen}>Delete</DropdownMenuItem>
      </SharedTableActionColumn>
      <ConfirnationDeleteModal
        isOpen={isDeleteModalOpen}
        setIsOpen={setIsDeleteModalOpen}
      />
    </>
  );
};

export default CategoryColumnAction;

import React from 'react';
import useServerData from '../../../../../../hooks/useServerData';
import EditCategoryPageContent from './_components/EditCategoryPageContent';
import { getCategoryDetailsQueryOptions } from '../../../../../../apis/categoryApis';
import { TypedParamsWithId } from '../../../../../../types/page';

const EditCategoryPage = async ({
  params: { id },
}: {
  params: TypedParamsWithId;
}) => {
  const { ServerData } = await useServerData({
    ...getCategoryDetailsQueryOptions(id),
  });
  return (
    <ServerData>
      <EditCategoryPageContent />
    </ServerData>
  );
};

export default EditCategoryPage;

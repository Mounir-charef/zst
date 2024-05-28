import React from 'react';
import CategoriesPageContent from './_components/CategoriesPageContent';
import useServerData from '../../../../hooks/useServerData';
import { getCategoriesOptionsQuery } from '../../../../apis/categoryApis';
import { SearchParams } from '../../../../apis/_api-utils';

const CategoriesPage = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const { ServerData } = await useServerData({
    ...getCategoriesOptionsQuery(searchParams),
  });
  return (
    <ServerData>
      <CategoriesPageContent />
    </ServerData>
  );
};

export default CategoriesPage;

import React from 'react';
import SuppliersPageContent from './_components/SuppliersPageContent';
import useServerData from '../../../../hooks/useServerData';
import { getUsersQueryOptions } from '../../../../apis/userApis';
import { SearchParams } from '../../../../apis/_api-utils';

const SuppliersPage = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const { ServerData } = await useServerData({
    ...getUsersQueryOptions(searchParams),
  });

  return (
    <ServerData>
      <SuppliersPageContent />
    </ServerData>
  );
};

export default SuppliersPage;

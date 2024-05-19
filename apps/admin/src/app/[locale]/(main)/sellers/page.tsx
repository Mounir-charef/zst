import React from 'react';
import SellersPageContent from './_components/SellersPageContent';
import useServerData from '../../../../hooks/useServerData';
import { getUsersQueryOptions } from '../../../../apis/userApis';
import { SearchParams } from '../../../../apis/_api-utils';

const SellersPage = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const { ServerData } = await useServerData({
    ...getUsersQueryOptions(searchParams),
  });

  return (
    <ServerData>
      <SellersPageContent />
    </ServerData>
  );
};

export default SellersPage;

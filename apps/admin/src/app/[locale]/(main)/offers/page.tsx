import React from 'react';
import useServerData from '../../../../hooks/useServerData';
import { getOffersQueryOptions } from '../../../../apis/offerApis';
import { SearchParams } from '../../../../apis/_api-utils';
import OffersPageContent from './_components/OffersPageContent';

const OffersPage = async ({
  searchParams,
}: {
  searchParams?: SearchParams;
}) => {
  const { ServerData } = await useServerData({
    ...getOffersQueryOptions(searchParams),
  });

  return (
    <ServerData>
      <OffersPageContent />
    </ServerData>
  );
};

export default OffersPage;

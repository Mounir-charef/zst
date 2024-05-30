import React from 'react';
import useServerData from '../../../../hooks/useServerData';
import AuctionsPageContent from './_components/AuctionsPageContent';
import { SearchParams } from '../../../../apis/_api-utils';
import { getAuctionsQueryOptions } from '../../../../apis/auctionApis';

const AuctionsPage = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const { ServerData } = await useServerData({
    ...getAuctionsQueryOptions(searchParams),
  });
  return (
    <ServerData>
      <AuctionsPageContent />
    </ServerData>
  );
};

export default AuctionsPage;

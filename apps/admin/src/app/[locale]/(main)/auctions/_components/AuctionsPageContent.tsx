'use client';

import { DataTable } from '@mono/ui';
import { useGetAuctionsQuery } from '../../../../../apis/auctionApis';
import auctionColumns from './columns/auction-columns';

const AuctionsPageContent = () => {
  const { data } = useGetAuctionsQuery({});
  return (
    <DataTable
      variant="items-table"
      header={{
        title: 'Auctions',
        description: 'Manage your auctions',
      }}
      data={data?.data || []}
      columns={auctionColumns}
    />
  );
};

export default AuctionsPageContent;

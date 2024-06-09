'use client';

import { DataTable } from '@mono/ui';
import { memo } from 'react';
import { useGetAuctions } from '../../../hooks/auctions/useGetAuctions';
import { columns } from './columns';

const AuctionsTableView = () => {
  const { data: auctions } = useGetAuctions();
  return (
    <DataTable
      variant="items-table"
      header={{
        title: 'Auctions',
        description: 'Recent auctions for you .',
      }}
      data={auctions ?? []}
      columns={columns}
    />
  );
};

export default memo(AuctionsTableView);

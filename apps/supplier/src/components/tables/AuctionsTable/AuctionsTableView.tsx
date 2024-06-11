'use client';

import { DataTable } from '@mono/ui';
import { memo } from 'react';
import { useGetAuctions } from '../../../hooks/auctions/useGetAuctions';
import { columns as DefaultColumns } from './columns';
import { statuses } from './filters';
import { ColumnDef } from '@tanstack/react-table';
import { Auction } from '../../../validation/auction-schema';

interface AuctionsTableViewProps {
  columns?: ColumnDef<Auction>[];
}

const AuctionsTableView = ({
  columns = DefaultColumns,
}: AuctionsTableViewProps) => {
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
      globalFilter={{
        column: 'status',
        options: statuses,
      }}
    />
  );
};

export default memo(AuctionsTableView);

import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import { getAuctions } from '../../../lib/data/auctions/getAuctions';
import AuctionsTableView from './AuctionsTableView';
import { memo } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { Auction } from '../../../validation/auction-schema';

interface AuctionsTableProps {
  columns?: ColumnDef<Auction>[];
}

const AuctionsTable = async ({ columns }: AuctionsTableProps) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['auctions'],
    queryFn: getAuctions,
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <AuctionsTableView columns={columns} />
    </HydrationBoundary>
  );
};

export default memo(AuctionsTable);

import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import { getAuctions } from '../../../lib/data/auctions/getAuctions';
import AuctionsTableView from './AuctionsTableView';

const AuctionsTable = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['auctions'],
    queryFn: getAuctions,
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <AuctionsTableView />
    </HydrationBoundary>
  );
};

export default AuctionsTable;

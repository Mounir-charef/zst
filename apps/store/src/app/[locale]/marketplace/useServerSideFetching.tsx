import {
  HydrationBoundary,
  QueryClient,
  QueryKey,
  dehydrate,
} from '@tanstack/react-query';
import { ReactNode } from 'react';
import { MarketplaceProductQueryOptions } from 'apps/store/src/dataApi/marketplace';

type ServerTableProps = {
  endpoint: string;
  queryFn: ({ queryKey }: { queryKey: QueryKey }) => void;
  defaultParams: Partial<MarketplaceProductQueryOptions>;
};

const useServerFetching = async ({
  endpoint,
  queryFn,
  defaultParams,
}: ServerTableProps) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: [endpoint, defaultParams],
    queryFn: queryFn,
    initialPageParam: 1,
  });

  return {
    ServerComponent: ({ children }: { children: ReactNode }) => (
      <HydrationBoundary state={dehydrate(queryClient)}>
        {children}
      </HydrationBoundary>
    ),
  };
};

export default useServerFetching;

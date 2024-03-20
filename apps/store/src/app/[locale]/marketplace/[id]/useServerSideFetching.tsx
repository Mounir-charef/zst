import {
  HydrationBoundary,
  QueryClient,
  QueryKey,
  dehydrate,
} from '@tanstack/react-query';
import { ReactNode } from 'react';

type ServerTableProps = {
  endpoint: string;
  queryFn: ({ queryKey }: { queryKey: QueryKey }) => void;
  defaultParams: { id: string | number };
};

const useServerFetching = async ({
  endpoint,
  queryFn,
  defaultParams,
}: ServerTableProps) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [endpoint, defaultParams.id],
    queryFn: queryFn,
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

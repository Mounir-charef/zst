import {
  HydrationBoundary,
  QueryClient,
  QueryFunction,
  QueryKey,
  dehydrate,
} from '@tanstack/react-query';

interface UseServerDataArgs {
  queryKey: QueryKey;
  queryFn: QueryFunction;
}

export default async function useServerData({
  queryFn,
  queryKey,
}: UseServerDataArgs) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey,
    queryFn,
  });

  return {
    ServerData: ({ children }: { children: React.ReactNode }) => {
      return (
        <HydrationBoundary state={dehydrate(queryClient)}>
          {children}
        </HydrationBoundary>
      );
    },
  };
}

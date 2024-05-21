'use client';
import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosInstance } from 'axios';
import useSession from './useSession';

export function useAuthQuery<
  TQueryKey extends readonly unknown[],
  TQueryFnData,
  TError,
  TData = TQueryFnData,
>(
  queryKey: TQueryKey,
  fetcher: (
    params: TQueryKey,
    axiosInstance: AxiosInstance,
  ) => Promise<TQueryFnData>,
  options?: Omit<
    UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
    'queryKey' | 'queryFn'
  >,
) {
  const session = useSession();

  return useQuery({
    queryKey,
    queryFn: async () => {
      return fetcher(queryKey, session.axiosInstance);
    },
    ...options,
  });
}

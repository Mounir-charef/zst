'use client';
import {
  UseMutationOptions,
  UseQueryOptions,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
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

export function useAuthMutation<
  TMutationKey extends readonly unknown[],
  TMutationFnData,
  TError,
  TData = TMutationFnData,
>(
  mutationKey: TMutationKey,
  fetcher: (
    params: TMutationKey,
    axiosInstance: AxiosInstance,
  ) => Promise<TMutationFnData>,
  options?: Omit<
    UseMutationOptions<TMutationFnData, TError, TData, TMutationKey>,
    'mutationKey' | 'mutationFn'
  >,
) {
  const session = useSession();

  return useMutation({
    mutationKey,
    mutationFn: async () => {
      return fetcher(mutationKey, session.axiosInstance);
    },
    ...options,
  });
}

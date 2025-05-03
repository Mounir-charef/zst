import { z } from 'zod';
import auction from '../../lib/data/auction/auction.json';
import { AuctionsParams, auctionSchema } from '../../validation/auction-schema';
import { useQuery } from '@tanstack/react-query';

export const useGetAuctions = (params?: AuctionsParams) => {
  return useQuery({
    queryKey: params ? ['auctions', params] : ['auctions'],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return z.array(auctionSchema).parse(auction);
    },
  });
};

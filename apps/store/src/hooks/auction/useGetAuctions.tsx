import { z } from 'zod';
import auction from '../../lib/data/auction/auction.json';
import { AuctionsParams, auctionSchema } from '../../validation/auction-schema';
import { useAuthQuery } from '../useAuthQuery';

export const useGetAuctions = (params?: AuctionsParams) => {
  return useAuthQuery(
    params ? ['auctions', params] : ['auctions'],
    async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return z.array(auctionSchema).parse(auction);
    },
  );
};

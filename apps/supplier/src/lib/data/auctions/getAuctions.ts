import { z } from 'zod';
import { Auction, auctionSchema } from '../../../validation/auction-schema';
import auctions from './auctions.json';

export async function getAuctions() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const data = z.array(auctionSchema).parse(auctions) as Auction[];
  return data;
}

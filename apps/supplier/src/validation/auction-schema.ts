import { z } from 'zod';

export const auctionSchema = z.object({
  id: z.number(),
  name: z.string(),
  date: z.string(),
  quantity: z.object({
    min: z.number().positive(),
    max: z.number().positive(),
  }),
  price: z.object({
    min: z.number().positive(),
    max: z.number().positive(),
  }),
  status: z.enum(['placed', 'pending', 'rejected']),
});

export type Auction = z.infer<typeof auctionSchema>;

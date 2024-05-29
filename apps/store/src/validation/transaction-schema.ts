import { z } from 'zod';

export const transactionSchema = z.object({
  id: z.string().or(z.number()),
  customer: z.object({
    name: z.string(),
    email: z.string().email(),
  }),
  amount: z.number(),
});

export type Transaction = z.infer<typeof transactionSchema>;

import { z } from 'zod';

export const saleSchema = z.object({
  id: z.string().or(z.number()),
  customer: z.object({
    name: z.string(),
    email: z.string().email(),
  }),
  amount: z.string().or(z.number()),
});

export type Sale = z.infer<typeof saleSchema>;

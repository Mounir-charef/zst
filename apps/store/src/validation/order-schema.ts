import { z } from 'zod';

export const orderSchema = z.object({
  id: z.string().or(z.number()),
  name: z.string(),
  date: z.string(),
  quantity: z.number(),
  price: z.number(),
  status: z.enum(['active', 'in_review', 'pending', 'delivered']),
});

export type Order = z.infer<typeof orderSchema>;

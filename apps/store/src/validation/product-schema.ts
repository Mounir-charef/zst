import { z } from 'zod';

export const productSchema = z.object({
  id: z.string().or(z.number()),
  name: z.string(),
  status: z.string(),
  price: z.number(),
  stock: z.number(),
  created_at: z.string(),
});

export type Product = z.infer<typeof productSchema>;

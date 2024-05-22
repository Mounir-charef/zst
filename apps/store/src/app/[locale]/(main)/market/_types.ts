import { z } from 'zod';

const OffersParamsValidator = z.object({
  search: z.string().optional(),
  category: z.string().optional(),
  price: z.string().optional(),
});

type MarketSearchParams = z.infer<typeof OffersParamsValidator>;

interface Offer {
  id: string;
  description: string;
  price: number;
  image: string;
  variations: string[];
  min: number;
  max: number;
}

export { OffersParamsValidator };

export { type Offer, type MarketSearchParams };

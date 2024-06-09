import { z } from 'zod';

const baseAuctionSchema = z.object({
  id: z.number(),
  name: z.string(),
  image: z.string(),
  price: z.object({
    min: z.number().positive(),
    max: z.number().positive(),
  }),
  quantity: z.object({
    min: z.number().positive(),
    max: z.number().positive(),
  }),
  created_at: z.string(),
});

const hasOffersAuctionSchema = z.object({
  ...baseAuctionSchema.shape,
  status: z.literal('has_offers'),
  offers: z.array(
    z.object({
      id: z.number(),
      price: z.number().positive(),
      quantity: z.number().positive(),
      orders: z.number().positive(),
    }),
  ),
});

const hasNoOffersAuctionSchema = z.object({
  ...baseAuctionSchema.shape,
  status: z.enum(['pending', 'on_auction', 'canceled']),
});

export const auctionSchema = z.discriminatedUnion('status', [
  hasOffersAuctionSchema,
  hasNoOffersAuctionSchema,
]);

export const auctionFiltersSchema = z.object({
  status: z.string().nullable().optional(),
  filter: z.string().nullable().optional(),
  price: z
    .array(z.coerce.number().int().min(0))
    .length(2)
    .nullable()
    .optional(),
  quantity: z
    .array(z.coerce.number().int().min(0))
    .length(2)
    .nullable()
    .optional(),
  category: z.array(z.string()).nullable().optional(),
  type: z.string().nullable().optional(),
});

export type AuctionsParams = z.infer<typeof auctionFiltersSchema> | undefined;

export type Auction = z.infer<typeof auctionSchema>;
export type AuctionWithOffers = z.infer<typeof hasOffersAuctionSchema>;
export type AuctionOffer = z.infer<
  typeof hasOffersAuctionSchema
>['offers'][number];

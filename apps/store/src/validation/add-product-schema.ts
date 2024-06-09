import { z } from 'zod';

export const addProductSchema = z.object({
  details: z.object({
    name: z.string().min(3).max(255),
    description: z.string().min(3).max(500),
  }),
  variants: z.array(
    z.object({
      name: z.string().min(3).max(255),
      values: z.array(z.string().min(1, 'Required')),
    }),
  ),
  status: z.string().min(1, 'Required'),
  category: z.string().min(1, 'Required'),
  subcategory: z.string().optional(),
  stock: z
    .array(
      z.object({
        mainVariant: z.object({
          name: z.string().min(3).max(255),
          value: z.string().min(1, 'Required'),
        }),
        image: z.string().min(1, 'required').url(),
        variations: z.array(
          z.object({
            variants: z.array(
              z.object({
                name: z.string().min(3).max(255),
                value: z.string().min(1, 'Required'),
              }),
            ),
            image: z.string().min(1, 'required').url(),
            price: z.coerce
              .number()
              .min(0, { message: 'Price must be greater than 0' }),
            quantity: z.coerce
              .number()
              .min(0, { message: 'Quantity must be greater than 0' }),
          }),
        ),
      }),
    )
    .or(
      z.array(
        z.object({
          mainVariant: z.object({
            name: z.string().min(3).max(255),
            value: z.string().min(1, 'Required'),
          }),
          image: z.string().min(1, 'required').url(),
          price: z.coerce
            .number()
            .min(0, { message: 'Price must be greater than 0' }),
          quantity: z.coerce
            .number()
            .min(0, { message: 'Quantity must be greater than 0' }),
        }),
      ),
    ),
  productImages: z.array(
    z.object({
      id: z.string().min(1, 'required').or(z.number().min(1, 'required')),
      url: z.string().min(1, 'required').url(),
    }),
  ),
  mainImage: z.string().min(1, 'required').url(),
});

export type IProductDetails = z.infer<typeof addProductSchema>;
export type Variant = IProductDetails['variants'][number];
export type VariantValue = Variant['values'][number];
export type Stock = IProductDetails['stock'];

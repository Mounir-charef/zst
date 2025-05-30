'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Badge, Button, Form } from '@mono/ui';
import { memo, useMemo } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import type { IProductDetails } from '../../types';
import ProductCategory from './ProductCategory';
import ProductDetails from './ProductDetails';
import ProductImages from './ProductImages';
import ProductStatus from './ProductStatus';
import ProductStock from './ProductStock';
import ProductVariants from './ProductVariants';
import GoBackButton from '../../../../../../components/GoBackButton';

const DEFAULTS: IProductDetails = {
  details: {
    name: '',
    description: '',
  },
  variants: [],
  status: '',
  mainImage: '',
  productImages: [],
  category: '',
  stock: [],
};

interface ProductDetailsFormProps {
  defaultValues?: IProductDetails;
}

const ProductDetailsForm = ({ defaultValues }: ProductDetailsFormProps) => {
  const isNew = useMemo(() => !defaultValues, [defaultValues]);
  const ProductDetailsSchema = useMemo(
    () =>
      z.object({
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
        stock: z.array(
          z
            .object({
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
            })
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
        ),
        productImages: z.array(
          z.object({
            id: z.string().min(1, 'required').or(z.number().min(1, 'required')),
            url: z.string().min(1, 'required').url(),
          }),
        ),
        mainImage: z.string().min(1, 'required').url(),
      }),
    [],
  );

  const form = useForm<IProductDetails>({
    resolver: zodResolver(ProductDetailsSchema),
    defaultValues: defaultValues ?? DEFAULTS,
  });

  const onSubmit: SubmitHandler<IProductDetails> = (data) => {
    if (isNew) {
      // Create new product
      toast.info(JSON.stringify(data));
    } else {
      // Update existing product
      toast.info(JSON.stringify(data));
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex items-center gap-4">
          <GoBackButton />
          {isNew ? (
            <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
              Add Product
            </h1>
          ) : (
            <>
              <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                {defaultValues?.details.name}
              </h1>
              <Badge variant="outline" className="ml-auto sm:ml-0">
                {defaultValues?.status}
              </Badge>
            </>
          )}

          <div className="hidden items-center gap-2 md:ml-auto md:flex">
            <Button variant="outline" size="sm" type="button">
              Discard
            </Button>
            <Button variant="outline" size="sm" type="button">
              Preview
            </Button>
            <Button size="sm" type="submit">
              Save Product
            </Button>
          </div>
        </div>
        <div className="grid w-full gap-4 md:grid-cols-[2fr_1fr] lg:grid-cols-3 lg:gap-8">
          <div className="grid w-full auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
            <ProductDetails />
            <ProductVariants />
            <ProductStock
              defaultStock={defaultValues ? defaultValues.stock : undefined}
            />
          </div>
          <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
            <ProductStatus />
            <ProductCategory />
            <ProductImages />
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 md:hidden">
          <Button variant="outline" size="sm" type="button">
            Discard
          </Button>
          <Button size="sm">Save Product</Button>
        </div>
      </form>
    </Form>
  );
};

export default memo(ProductDetailsForm);

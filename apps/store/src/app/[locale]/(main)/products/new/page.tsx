'use client';

import { ChevronLeft } from 'lucide-react';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Form, buttonVariants } from '@mono/ui';
import { useMemo } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { Link } from '../../../../../navigation';
import ProductCategory from './_components/ProductCategory';
import ProductDetails from './_components/ProductDetails';
import ProductStatus from './_components/ProductStatus';
import ProductStock from './_components/ProductStock';
import ProductVariants from './_components/ProductVariants';
import ProductImages from './_components/ProductImages';
import GoBackButton from '../../../../../components/GoBackButton';

export type Variant = {
  name: string;
  values: string[];
};

type VariantValue = {
  name: string;
  value: string;
}[];

export type NewProduct = {
  details: {
    name: string;
    description: string;
  };
  variants: Variant[];
  status: string;
  category: string;
  subcategory?: string;
  stock: {
    variantValues: VariantValue;
    price: number;
    quantity: number;
  }[];
  productImages: {
    id: string | number;
    url: string;
  }[];
  mainImage: string;
};

export default function NewProductPage() {
  const NewProductSchema = useMemo(
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
          z.object({
            variantValues: z.array(
              z.object({
                name: z.string(),
                value: z.string(),
              }),
            ),
            price: z.coerce.number().min(0, 'required'),
            quantity: z.coerce.number().min(0, 'required'),
          }),
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

  const form = useForm<NewProduct>({
    resolver: zodResolver(NewProductSchema),
    defaultValues: {
      details: {
        name: '',
        description: '',
      },
      variants: [],
      status: '',
      stock: [],
      mainImage: '',
      productImages: [],
      category: '',
    },
  });

  const onSubmit: SubmitHandler<NewProduct> = (data) => {
    console.log(data);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto grid flex-1 auto-rows-max gap-4 px-2"
      >
        <div className="flex items-center gap-4">
          <GoBackButton />
          <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
            Add Product
          </h1>

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
        <div className="grid gap-4 md:grid-cols-[2fr_1fr] lg:grid-cols-3 lg:gap-8">
          <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
            <ProductDetails />
            <ProductVariants />
            <ProductStock />
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
}

'use client';

import { ChevronLeft, PlusCircle, Upload } from 'lucide-react';
import Image from 'next/image';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Form,
  buttonVariants,
} from '@mono/ui';
import { useMemo } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { Link } from '../../../../../navigation';
import ProductDetails from './_components/ProductDetails';
import ProductStatus from './_components/ProductStatus';
import ProductVariants from './_components/ProductVariants';
import ProductCategory from './_components/ProductCategory';
import ProductStock from './_components/ProductStock';

export type Variant = {
  name: string;
  values: string[];
};

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
    variantValue: string;
    subvariants: {
      name: string;
      price: number;
      quantity: number;
    }[];
  }[];
};

export default function NewProductPage() {
  const NewProductSchema = useMemo(
    () =>
      z
        .object({
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
              variantValue: z.string().min(3).max(255),
              subvariants: z.array(
                z.object({
                  name: z.string().min(3).max(255),
                  price: z.coerce.number().positive(),
                  quantity: z.coerce.number().int().positive(),
                }),
              ),
            }),
          ),
        })
        .refine(
          (data) => {
            // the table variantValue is the all the possible value of the first defined varient and the subvariant is the combination of the other varients
            const mainVariant = data.variants[0];
            const otherVariants = data.variants.slice(1);

            return data.stock.every((stock) => {
              const variantValue = stock.variantValue;
              const subvariants = stock.subvariants;
              return (
                mainVariant.values.includes(variantValue) &&
                subvariants.every((subvariant) => {
                  return otherVariants.every((variant) =>
                    variant.values.includes(subvariant.name),
                  );
                })
              );
            });
          },
          {
            message: 'Stock varients must match defined varients',
            path: ['stock'],
          },
        ),
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
          <Link
            href="/products"
            className={buttonVariants({
              size: 'icon',
              variant: 'outline',
              className: 'h-7 w-7',
            })}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Back to products</span>
          </Link>
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
            <Card
              className="overflow-hidden"
              x-chunk="A card with a form to upload product images"
            >
              <CardHeader>
                <CardTitle>Product Images</CardTitle>
                <CardDescription>
                  Lipsum dolor sit amet, consectetur adipiscing elit
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <Image
                    alt="Product image"
                    className="aspect-square w-full rounded-md object-cover"
                    height="300"
                    src="/placeholder.svg"
                    width="300"
                  />
                  <div className="grid grid-cols-3 gap-2">
                    <Button variant="ghost" className="h-auto p-0">
                      <Image
                        alt="Product image"
                        className="aspect-square w-full rounded-md object-cover"
                        height="84"
                        src="/placeholder.svg"
                        width="84"
                      />
                    </Button>
                    <Button variant="ghost" className="h-auto p-0">
                      <Image
                        alt="Product image"
                        className="aspect-square w-full rounded-md object-cover"
                        height="84"
                        src="/placeholder.svg"
                        width="84"
                      />
                    </Button>
                    <Button
                      variant="ghost"
                      className="flex aspect-square h-auto w-full items-center justify-center rounded-md border border-dashed p-0"
                    >
                      <Upload className="text-muted-foreground h-4 w-4" />
                      <span className="sr-only">Upload</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 md:hidden">
          <Button variant="outline" size="sm">
            Discard
          </Button>
          <Button size="sm">Save Product</Button>
        </div>
      </form>
    </Form>
  );
}

'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Badge, Button, Form } from '@mono/ui';
import { memo, useMemo } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import GoBackButton from '../../GoBackButton';
import {
  IProductDetails,
  addProductSchema,
} from '../../../validation/add-product-schema';
import ProductCategory from './ProductCategory';
import ProductDetails from './ProductDetails';
import ProductImages from './ProductImages';
import ProductStatus from './ProductStatus';
import ProductStock from './ProductStock';
import ProductVariants from './ProductVariants';

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

  const form = useForm<IProductDetails>({
    resolver: zodResolver(addProductSchema),
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

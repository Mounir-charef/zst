'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Form } from '@mono/ui';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import GoBackButton from '../../../../../components/GoBackButton';
import ProductCategory from '../../../../../components/products/add-form/ProductCategory';
import ProductDetails from '../../../../../components/products/add-form/ProductDetails';
import ProductImages from '../../../../../components/products/add-form/ProductImages';
import ProductStatus from '../../../../../components/products/add-form/ProductStatus';
import ProductStock from '../../../../../components/products/add-form/ProductStock';
import ProductVariants from '../../../../../components/products/add-form/ProductVariants';
import {
  IProductDetails,
  addProductSchema,
} from '../../../../../validation/add-product-schema';
import SelectProductDialog from './_components/SelectProductDialog';
import { useEffect, useState } from 'react';

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

const Page = () => {
  const [defaultValues, setDefaultValues] = useState<IProductDetails>(DEFAULTS);
  const form = useForm<IProductDetails>({
    resolver: zodResolver(addProductSchema),
    defaultValues,
  });

  const onSubmit: SubmitHandler<IProductDetails> = (data) => {
    toast.info(JSON.stringify(data));
  };

  useEffect(() => {
    form.reset(defaultValues);
  }, [defaultValues]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex items-center gap-4">
          <GoBackButton />
          <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
            Add Auction
          </h1>

          <div className="hidden items-center gap-2 md:ml-auto md:flex">
            <Button variant="outline" size="sm" type="button">
              Discard
            </Button>
            <SelectProductDialog setDefaultValues={setDefaultValues} />
            <Button size="sm" type="submit">
              Submit Auction
            </Button>
          </div>
        </div>
        <div className="grid w-full gap-4 md:grid-cols-[2fr_1fr] lg:grid-cols-3 lg:gap-8">
          <div className="grid w-full auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
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
          <Button size="sm">Submit Auction</Button>
        </div>
      </form>
    </Form>
  );
};

export default Page;

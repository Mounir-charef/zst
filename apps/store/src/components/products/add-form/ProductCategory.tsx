'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  SelectField,
} from '@mono/ui';
import { memo } from 'react';
import { useFormContext } from 'react-hook-form';
import { IProductDetails } from '../../../validation/add-product-schema';

const PRODUCT_POSSIBLE_CATEGORIES = [
  {
    label: 'Electronics',
    value: 'electronics',
  },
  {
    label: 'Clothing',
    value: 'clothing',
  },
  {
    label: 'Books',
    value: 'books',
  },
  {
    label: 'Home & Garden',
    value: 'home-garden',
  },
  {
    label: 'Health & Beauty',
    value: 'health-beauty',
  },
  {
    label: 'Toys & Hobbies',
    value: 'toys-hobbies',
  },
  {
    label: 'Sports & Outdoors',
    value: 'sports-outdoors',
  },
  {
    label: 'Other',
    value: 'other',
  },
];

const ProductCategory = () => {
  const { control } = useFormContext<IProductDetails>();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Product Category</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <SelectField
            selectProps={{
              selectTrigger: {
                title: 'product category',
                'aria-label': 'select product category',
              },
            }}
            label="Category"
            name="category"
            control={control}
            options={PRODUCT_POSSIBLE_CATEGORIES}
          />

          <SelectField
            selectProps={{
              selectTrigger: {
                title: 'product sub-catgory',
                'aria-label': 'select product sub-catgory',
              },
            }}
            label="Sub-category (optional)"
            name="subcategory"
            control={control}
            options={PRODUCT_POSSIBLE_CATEGORIES}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default memo(ProductCategory);

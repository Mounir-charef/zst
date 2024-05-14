'use client';

import { memo } from 'react';
import { useFormContext } from 'react-hook-form';
import { NewProduct } from '../page';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  SelectField,
} from '@mono/ui';

const PRODUCT_POSSIBLE_STATUSES = ['draft', 'published', 'archived'];

const ProductStatus = () => {
  const { control } = useFormContext<NewProduct>();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Product Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <div className="grid gap-3">
            <SelectField
              label="Status"
              name="status"
              control={control}
              options={PRODUCT_POSSIBLE_STATUSES.map((status) => ({
                value: status,
                label: status,
              }))}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default memo(ProductStatus);

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
import { IProductDetails } from '../../types';

const PRODUCT_POSSIBLE_STATUSES = [
  {
    value: 'draft',
    label: 'Draft',
  },
  {
    value: 'published',
    label: 'Published',
  },
  {
    value: 'archived',
    label: 'Archived',
  },
];

const ProductStatus = () => {
  const { control } = useFormContext<IProductDetails>();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Product Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <div className="grid gap-3">
            <SelectField
              selectProps={{
                selectTrigger: {
                  title: 'product status',
                  'aria-label': 'select product status',
                },
              }}
              label="Status"
              name="status"
              control={control}
              options={PRODUCT_POSSIBLE_STATUSES}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default memo(ProductStatus);

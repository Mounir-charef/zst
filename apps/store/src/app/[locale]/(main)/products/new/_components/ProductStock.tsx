'use client';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@mono/ui';
import { memo } from 'react';
import { useFormContext } from 'react-hook-form';
import { NewProduct } from '../page';
import VariationTable from './VariationTable';

const ProductStock = () => {
  const { watch } = useFormContext<NewProduct>();

  const variants = watch('variants');

  return (
    <Card>
      <CardHeader>
        <CardTitle>Stock</CardTitle>
      </CardHeader>
      <CardContent>
        <VariationTable />
      </CardContent>
      <CardFooter className="border-t p-6">
        <p className="bg-muted flex-grow rounded p-4 text-center text-sm">
          Total stock:{' '}
          {variants.reduce(
            (acc, variant) =>
              acc +
              variant.values.reduce((acc, value) => acc + value.quantity, 0),
            0,
          )}{' '}
          units
        </p>
      </CardFooter>
    </Card>
  );
};

export default memo(ProductStock);

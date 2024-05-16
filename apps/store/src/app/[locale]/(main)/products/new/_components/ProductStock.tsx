'use client';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@mono/ui';
import { memo } from 'react';
import { useFormContext } from 'react-hook-form';
import { NewProduct } from '../page';
import VariationTable from './VariationTable';

const ProductStock = () => {
  const { watch } = useFormContext<NewProduct>();

  const stock = watch('stock');

  return (
    <Card>
      <CardHeader>
        <CardTitle>Stock</CardTitle>
      </CardHeader>
      <CardContent>
        <VariationTable />
      </CardContent>
      <CardFooter className="border-t p-6">
        <p className="bg-accent flex-grow rounded-md p-4 text-center text-sm">
          Total stock:{' '}
          <span className="font-semibold">
            {stock.reduce((acc, { quantity }) => acc + Number(quantity), 0)}
          </span>
        </p>
      </CardFooter>
    </Card>
  );
};

export default memo(ProductStock);

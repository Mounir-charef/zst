'use client';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@mono/ui';
import { memo } from 'react';
import { useFormContext } from 'react-hook-form';
import { IProductDetails, Stock } from '../../../validation/add-product-schema';
import VariationTable from './VariationTable';

const ProductStock = ({ defaultStock }: { defaultStock?: Stock }) => {
  const { watch } = useFormContext<IProductDetails>();

  const stock = watch('stock');
  return (
    <Card className="w-full overflow-x-auto">
      <CardHeader>
        <CardTitle>Stock</CardTitle>
      </CardHeader>
      <CardContent className="w-full">
        <VariationTable defaultStock={defaultStock} />
      </CardContent>
      <CardFooter className="border-t p-6">
        <p className="bg-accent flex-grow rounded-md p-4 text-center text-sm">
          Total stock:{' '}
          <span className="font-semibold">
            {stock?.reduce((acc, curr) => {
              if ('quantity' in curr) return acc + Number(curr.quantity);

              return (
                acc +
                curr.variations.reduce(
                  (acc, curr) => acc + Number(curr.quantity),
                  0,
                )
              );
            }, 0)}
          </span>
        </p>
      </CardFooter>
    </Card>
  );
};

export default memo(ProductStock);

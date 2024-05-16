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
          {stock.reduce((acc, variant) => {
            if ('mainVariant' in variant) {
              return (
                acc +
                variant.subvariants.reduce(
                  (acc, subvariant) =>
                    Number(acc) + Number(subvariant.quantity),
                  0,
                )
              );
            }

            return acc + Number(variant.stock.quantity);
          }, 0)}
        </p>
      </CardFooter>
    </Card>
  );
};

export default memo(ProductStock);

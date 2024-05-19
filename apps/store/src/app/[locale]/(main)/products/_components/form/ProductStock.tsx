'use client';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@mono/ui';
import { memo } from 'react';
import { useFormContext } from 'react-hook-form';
import VariationTable from './VariationTable';
import { IProductDetails } from '../../types';

const ProductStock = ({
  defaultStock,
}: {
  defaultStock?: IProductDetails['stock'];
}) => {
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
            {stock.reduce((acc, { quantity }) => acc + Number(quantity), 0)}
          </span>
        </p>
      </CardFooter>
    </Card>
  );
};

export default memo(ProductStock);

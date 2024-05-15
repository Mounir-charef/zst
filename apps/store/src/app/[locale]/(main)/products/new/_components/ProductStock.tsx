'use client';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@mono/ui';
import { memo } from 'react';
import VariationTable from './VariationTable';

const ProductStock = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Stock</CardTitle>
      </CardHeader>
      <CardContent>
        <VariationTable />
      </CardContent>
      <CardFooter className="border-t p-6"></CardFooter>
    </Card>
  );
};

export default memo(ProductStock);

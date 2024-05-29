import { Avatar, AvatarFallback, AvatarImage, CardContent } from '@mono/ui';
import { memo } from 'react';
import { z } from 'zod';
import { saleSchema } from '../../../../validation/sales-schema';
import sales from '../../../../lib/data/sales/sales.json';
import { nameToSlug } from '../../../../lib/utils';

async function getSales() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return z.array(saleSchema).parse(sales);
}

const Sales = async () => {
  const sales = await getSales();

  if (sales.length === 0) {
    return (
      <CardContent className="w-full">
        <div className="h-24 text-center">No sales found.</div>
      </CardContent>
    );
  }
  return (
    <CardContent className="grid gap-8">
      {sales.map((sale) => (
        <div className="flex items-center gap-4">
          <Avatar className="hidden h-9 w-9 sm:flex">
            <AvatarImage src="/avatars/01.png" alt="Avatar" />
            <AvatarFallback>{nameToSlug(sale.customer.name)}</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-sm font-medium leading-none">
              {sale.customer.name}
            </p>
            <p className="text-muted-foreground text-sm">
              {sale.customer.email}
            </p>
          </div>
          <div className="ml-auto font-medium">${sale.amount}</div>
        </div>
      ))}
    </CardContent>
  );
};

export default memo(Sales);

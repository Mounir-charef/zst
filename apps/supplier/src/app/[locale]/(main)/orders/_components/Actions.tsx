'use client';

import { Row } from '@tanstack/react-table';

import { orderSchema } from '../_data/schema';

interface OrderRowActionsProps<TData> {
  row: Row<TData>;
}

export function OrderRowActions<TData>({ row }: OrderRowActionsProps<TData>) {
  const order = orderSchema.parse(row.original);

  return <div>{order.name}</div>;
}

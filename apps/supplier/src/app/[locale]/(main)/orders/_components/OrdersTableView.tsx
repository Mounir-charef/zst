'use client';

import { DataTable } from '@mono/ui';
import { memo } from 'react';
import { columns } from './Columns';
import { globalFilter } from './filters';
import { Order } from '../../../../../validation/order-schema';
import { useQuery } from '@tanstack/react-query';
import { getOrders } from '../_data/Data';

const OrdersTableView = () => {
  const { data: orders } = useQuery({
    queryKey: ['orders'],
    queryFn: getOrders,
  });
  return (
    <DataTable
      variant="items-table"
      header={{
        title: 'Orders',
        description: 'Recent orders from your store .',
      }}
      data={orders ?? []}
      columns={columns}
      searchOptions={{
        column: 'name',
        placeholder: 'Search for orders',
      }}
      globalFilter={globalFilter}
    />
  );
};

export default memo(OrdersTableView);

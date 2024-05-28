'use client';

import { DataTable } from '@mono/ui';
import { memo } from 'react';
import { useGetOrders } from '../../../../../hooks/orders/useGetOrders';
import { columns } from './Columns';
import { globalFilter } from './filters';

const OrdersTableView = () => {
  const { data: orders } = useGetOrders();
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

'use client';

import { DataTable } from '@mono/ui';
import { memo } from 'react';
import { useGetOrders } from '../../../../../hooks/orders/useGetOrders';
import { columns } from './Columns';
import { useOrderContext } from './OrderProvider';
import { globalFilter } from './filters';

const OrdersTableView = () => {
  const { data: orders } = useGetOrders();
  const { selectedOrderId, setSelectedOrder } = useOrderContext();
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
      rowProps={(row, table) => ({
        onClick: () => {
          setSelectedOrder(row.original.id);
        },
        className: 'cursor-pointer',
        'data-state': selectedOrderId == row.original.id && 'selected',
      })}
    />
  );
};

export default memo(OrdersTableView);

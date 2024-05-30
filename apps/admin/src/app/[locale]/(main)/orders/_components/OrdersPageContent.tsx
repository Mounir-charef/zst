'use client';

import { DataTable } from '@mono/ui';
import { useGetOrdersQuery } from '../../../../../apis/orderApis';
import orderColumns from './columns/order-columns';

const OrdersPageContent = () => {
  const { data } = useGetOrdersQuery({});
  return (
    <DataTable
      header={{
        title: 'Orders',
        description: 'Manage your orders.',
      }}
      data={data?.data || []}
      columns={orderColumns}
    />
  );
};

export default OrdersPageContent;

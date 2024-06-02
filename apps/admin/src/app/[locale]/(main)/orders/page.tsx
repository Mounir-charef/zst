import React from 'react';
import useServerData from '../../../../hooks/useServerData';
import OrdersPageContent from './_components/OrdersPageContent';
import { getOrdersQueryOptions } from '../../../../apis/orderApis';
import { SearchParams } from '../../../../apis/_api-utils';

const OrdersPage = async ({ searchParams }: { searchParams: SearchParams }) => {
  const { ServerData } = await useServerData({
    ...getOrdersQueryOptions(searchParams),
  });

  return (
    <ServerData>
      <OrdersPageContent />
    </ServerData>
  );
};

export default OrdersPage;

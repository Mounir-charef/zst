import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import OrdersTableView from './OrdersTableView';
import { getOrders } from '../../../../../lib/data/orders/getOrders';

const OrdersTable = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['orders'],
    queryFn: getOrders,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <OrdersTableView />
    </HydrationBoundary>
  );
};

export default OrdersTable;

'use client';

import { createContext, useCallback, useContext, useState } from 'react';
import type { Order } from '../../../../../validation/order-schema';

interface OrderContextValue {
  selectedOrderId: Order['id'] | null;
  selectOrderId: (orderId: Order['id']) => void;
}

const OrderContext = createContext<OrderContextValue | undefined>(undefined);

export const OrderProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedOrderId, setSelectedOrder] = useState<Order['id'] | null>(
    null,
  );

  const selectOrderId = useCallback(
    (orderId: Order['id']) => {
      if (selectedOrderId === orderId) {
        setSelectedOrder(null);
      } else {
        setSelectedOrder(orderId);
      }
    },
    [selectedOrderId],
  );

  return (
    <OrderContext.Provider value={{ selectedOrderId, selectOrderId }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('useOrder must be used within a OrderProvider');
  }
  return context;
};

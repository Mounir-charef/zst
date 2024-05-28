'use client';

import { createContext, useContext, useState } from 'react';
import type { Order } from '../../../../../validation/order-schema';

interface OrderContextValue {
  selectedOrderId: Order['id'] | null;
  setSelectedOrder: (orderId: Order['id'] | null) => void;
}

const OrderContext = createContext<OrderContextValue | undefined>(undefined);

export const OrderProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedOrderId, setSelectedOrder] = useState<Order['id'] | null>(
    null,
  );

  return (
    <OrderContext.Provider
      value={{
        selectedOrderId,
        setSelectedOrder,
      }}
    >
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

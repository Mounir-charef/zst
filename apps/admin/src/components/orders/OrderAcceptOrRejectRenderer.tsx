import React from 'react';
import { canAcceptOrRejectOrder } from '../../utils/orderUtils';

interface OrderAcceptOrRejectRendererProps {
  status: string;
  children: React.ReactNode;
}

const OrderAcceptOrRejectRenderer = ({
  children,
  status,
}: OrderAcceptOrRejectRendererProps) => {
  const canAcceptOrReject = canAcceptOrRejectOrder(status);
  if (canAcceptOrReject) {
    return children;
  }
  return null;
};

export default OrderAcceptOrRejectRenderer;

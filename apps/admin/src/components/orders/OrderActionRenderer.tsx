import React from 'react';

interface OrderActionRendererProps {
  status: string;
  allowedStatuses: string[];
  children: React.ReactNode;
}

const OrderActionRenderer = ({
  allowedStatuses,
  children,
  status,
}: OrderActionRendererProps) => {
  if (allowedStatuses.includes(status)) {
    return children;
  }
  return null;
};

export default OrderActionRenderer;

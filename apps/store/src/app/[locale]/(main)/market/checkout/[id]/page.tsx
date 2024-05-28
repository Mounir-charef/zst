import React from 'react';
import OrderCheckout from '../../_components/OrderCheckout';

type checkoutOrder = {
  id: string;
};
const page = ({ id }: checkoutOrder) => {
  return <OrderCheckout id={id} />;
};

export default page;

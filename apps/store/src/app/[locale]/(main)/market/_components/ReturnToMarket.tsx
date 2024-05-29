import React from 'react';
import GoBackButton from '../../../../../components/GoBackButton';

const ReturnToMarket = () => {
  return (
    <div className="flex items-center gap-2">
      <GoBackButton />
      <h3 className="text-xl font-semibold">Confirm and send order request</h3>
    </div>
  );
};

export default ReturnToMarket;

import { memo } from 'react';
import { getOffers } from '../_data/getData';
import { MarketSearchParams } from '../_types';
import Offers from './Offers';

const Market = async ({
  searchParams,
}: {
  searchParams: MarketSearchParams;
}) => {
  const data = await getOffers(searchParams);
  return <Offers data={data} />;
};

export default memo(Market);

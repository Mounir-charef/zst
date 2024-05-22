import { MarketSearchParams, OffersParamsValidator } from '../_types';
import { offers } from './offers';
import 'server-only';

export async function getOffers(searchParams: MarketSearchParams) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const { data } = OffersParamsValidator.safeParse(searchParams);
  return offers.filter((offer) => {
    if (data?.search) {
      return offer.description
        .toLowerCase()
        .includes(data.search.toLowerCase());
    }
    return true;
  });
}

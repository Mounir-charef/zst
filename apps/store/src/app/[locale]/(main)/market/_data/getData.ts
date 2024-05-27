import { MarketSearchParams, OffersParamsValidator } from '../_types';
import { ColorVariants, offers } from './offers';

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

export async function getOffer(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return offers.find((offer) => offer.id === id);
}

export async function getOfferVariants(id: string) {
  try {
    const response = await ColorVariants;
    if (!response) {
      throw new Error('Error fetching data');
    }
  } catch (e) {
    console.error(e);
    throw e;
  }
}

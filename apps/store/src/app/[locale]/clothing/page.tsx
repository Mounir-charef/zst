import { QueryKey } from '@tanstack/react-query';
import { API_ENDPOINTS } from '../../../dataApi/api_endpoints';
import ProductsListClientSide from './ProductsListClientSide';
import useServerFetching from './useServerSideFetching';
import { getFullApiPath } from '../../../lib/getFullApiPath';
import { convertObjectToStringRecord } from '../../../lib/convertObjectToStringRecord';

async function getClothingProducts({ queryKey }: { queryKey: QueryKey }) {
  'use server';

  const url = new URL(getFullApiPath(API_ENDPOINTS.CLOTHING));
  url.search = new URLSearchParams(
    convertObjectToStringRecord(queryKey[1] as object)
  ).toString();

  const res = await fetch(url.href);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const Page = async () => {
  const defaultParams = { page: 1 };
  const { ServerComponent } = await useServerFetching({
    endpoint: API_ENDPOINTS.CLOTHING,
    queryFn: getClothingProducts,
    defaultParams: defaultParams,
  });
  return (
    <ServerComponent>
      <ProductsListClientSide defaultParams={defaultParams} />
    </ServerComponent>
  );
};

export default Page;

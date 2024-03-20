import { QueryKey } from '@tanstack/react-query';
import { API_ENDPOINTS } from '../../../dataApi/api_endpoints';
import useServerFetching from './useServerSideFetching';
import { getFullApiPath } from '../../../lib/getFullApiPath';
import { convertObjectToStringRecord } from '../../../lib/convertObjectToStringRecord';
import { ClothingProductQueryOptions } from 'apps/store/src/dataApi/clothing';
import ListClientSide from './ListClientSide';

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

const Page = async ({
  searchParams,
}: {
  searchParams: ClothingProductQueryOptions;
}) => {
  const defaultParams = { ...searchParams, page: 1 };

  const { ServerComponent } = await useServerFetching({
    endpoint: API_ENDPOINTS.CLOTHING,
    queryFn: getClothingProducts,
    defaultParams: defaultParams,
  });

  return (
    <ServerComponent>
      <ListClientSide defaultParams={defaultParams} />
    </ServerComponent>
  );
};

export default Page;

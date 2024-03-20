import { QueryKey } from '@tanstack/react-query';
import { API_ENDPOINTS } from '../../../dataApi/api_endpoints';
import useServerFetching from './useServerSideFetching';
import { getFullApiPath } from '../../../lib/getFullApiPath';
import { convertObjectToStringRecord } from '../../../lib/convertObjectToStringRecord';
import ListClientSide from './ListClientSide';
import { MarketplaceProductQueryOptions } from 'apps/store/src/dataApi/marketplace';

async function getMarketplaceProducts({ queryKey }: { queryKey: QueryKey }) {
  'use server';

  const url = new URL(getFullApiPath(API_ENDPOINTS.MARKETPLACE));
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
  searchParams: MarketplaceProductQueryOptions;
}) => {
  const defaultParams = { ...searchParams, page: 1 };

  const { ServerComponent } = await useServerFetching({
    endpoint: API_ENDPOINTS.MARKETPLACE,
    queryFn: getMarketplaceProducts,
    defaultParams: defaultParams,
  });

  return (
    <ServerComponent>
      <ListClientSide defaultParams={defaultParams} />
    </ServerComponent>
  );
};

export default Page;

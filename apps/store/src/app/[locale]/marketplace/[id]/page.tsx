import { QueryKey } from '@tanstack/react-query';
import { API_ENDPOINTS } from 'apps/store/src/dataApi/api_endpoints';
import DetailsClientSide from './DetailsClientSide';
import useServerFetching from './useServerSideFetching';
import { getFullApiPath } from 'apps/store/src/lib/getFullApiPath';

async function findMarketplaceProduct({ queryKey }: { queryKey: QueryKey }) {
  'use server';

  console.log(
    '%capps/store/src/app/[locale]/marketplace/[id]/page.tsx:11 res',
    'color: white; background-color: #007acc;',
    getFullApiPath('' + queryKey?.[0])
  );

  const url = new URL(getFullApiPath('' + queryKey?.[0]));

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const Page = async () => {
  const defaultParams = { id: 1 };
  const { ServerComponent } = await useServerFetching({
    endpoint: API_ENDPOINTS.MARKETPLACE + `/${defaultParams.id}`,
    queryFn: findMarketplaceProduct,
    defaultParams: defaultParams,
  });

  return (
    <ServerComponent>
      <DetailsClientSide defaultParams={defaultParams} />
    </ServerComponent>
  );
};

export default Page;

import React from 'react';
import ListingPageContent from './_components/ListingPageContent';
import useServerData from '../../../../../hooks/useServerData';
import { getUserQueryOptions } from '../../../../../apis/userApis';

const ListingPage = async ({ searchParams }: { searchParams: unknown }) => {
  const { ServerData } = await useServerData({
    ...getUserQueryOptions(searchParams),
  });

  return (
    <ServerData>
      <ListingPageContent />
    </ServerData>
  );
};

export default ListingPage;

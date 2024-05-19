import React from 'react';
import ClientsPageContent from './_components/ClientsPageContent';
import useServerData from '../../../../hooks/useServerData';
import { getUsersQueryOptions } from '../../../../apis/userApis';
import { SearchParams } from '../../../../apis/_api-utils';

const ClientsPage = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const { ServerData } = await useServerData({
    ...getUsersQueryOptions(searchParams),
  });
  return (
    <ServerData>
      <ClientsPageContent />
    </ServerData>
  );
};

export default ClientsPage;

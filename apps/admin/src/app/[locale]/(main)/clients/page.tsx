import React from 'react';
import ClientsPageContent from './_components/ClientsPageContent';
import useServerData from '../../../../hooks/useServerData';
import { SearchParams } from '../../../../apis/_api-utils';
import { getClientsQueryOptions } from '../../../../apis/clientApis';

const ClientsPage = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const { ServerData } = await useServerData({
    ...getClientsQueryOptions(searchParams),
  });

  return (
    <ServerData>
      <ClientsPageContent />
    </ServerData>
  );
};

export default ClientsPage;

'use client';

import React from 'react';
import clientColumns from './columns/client-columns';
import { useGetClientsQuery } from '../../../../../apis/clientApis';
import { DataTable } from '@mono/ui';

const ClientsPageContent = () => {
  const { data } = useGetClientsQuery({});
  return (
    <>
      <DataTable
        header={{
          title: 'Clients',
          description: 'Manage your clients',
        }}
        columns={clientColumns}
        data={data?.data || []}
        searchOptions={{
          column: 'username',
          placeholder: 'Search for clients',
        }}
      />
    </>
  );
};

export default ClientsPageContent;

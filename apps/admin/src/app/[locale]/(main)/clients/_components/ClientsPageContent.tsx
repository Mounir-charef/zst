'use client';

import React from 'react';
import clientColumns from './columns/client-columns';
import { useGetClientsQuery } from '../../../../../apis/clientApis';
import { DataTable } from '@mono/ui';
import AddNewButton from '../../../../../components/common/AddNewButton';
import routesConfig from '../../../../../config/routesConfig';

const globalAction = () => {
  return (
    <>
      <AddNewButton href={routesConfig.addNewClient} text="Add Client" />
    </>
  );
};

const ClientsPageContent = () => {
  const { data } = useGetClientsQuery({});
  return (
    <>
      <DataTable
        variant="items-table"
        header={{
          title: 'Clients',
          description: 'Manage your clients',
        }}
        columns={clientColumns}
        globalAction={globalAction}
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

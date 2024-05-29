'use client';

import React from 'react';
import supplierColumns from './columns/suppiler-columns';
import { useGetSuppliersQuery } from '../../../../../apis/supplierApis';
import { DataTable } from '@mono/ui';
import AddNewButton from '../../../../../components/common/AddNewButton';
import routesConfig from '../../../../../config/routesConfig';

const globalAction = () => {
  return (
    <>
      <AddNewButton href={routesConfig.addNewSupplier} text="Add Supplier" />
    </>
  );
};

const SuppliersPageContent = () => {
  const { data } = useGetSuppliersQuery({});
  return (
    <>
      <DataTable
        variant="items-table"
        header={{
          title: 'Suppliers',
          description: 'Manage your suppliers',
        }}
        columns={supplierColumns}
        globalAction={globalAction}
        data={data?.data || []}
        searchOptions={{
          column: 'username',
          placeholder: 'Search for suppliers',
        }}
      />
    </>
  );
};

export default SuppliersPageContent;

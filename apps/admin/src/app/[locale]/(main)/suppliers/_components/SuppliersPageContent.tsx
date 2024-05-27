'use client';

import React from 'react';
import supplierColumns from './columns/suppiler-columns';
import { useGetSuppliersQuery } from '../../../../../apis/supplierApis';
import { DataTable } from '@mono/ui';

const SuppliersPageContent = () => {
  const { data } = useGetSuppliersQuery({});
  return (
    <>
      <DataTable
        header={{
          title: 'Suppliers',
          description: 'Manage your suppliers',
        }}
        columns={supplierColumns}
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

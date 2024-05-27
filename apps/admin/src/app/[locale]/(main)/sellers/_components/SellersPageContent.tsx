'use client';

import React from 'react';
import sellerColumns from './columns/seller-columns';
import { useGetSellersQuery } from '../../../../../apis/sellerApis';
import { DataTable } from '@mono/ui';

const SellersPageContent = () => {
  const { data } = useGetSellersQuery({});
  return (
    <>
      <DataTable
        header={{
          title: 'Sellers',
          description: 'Manage your sellers',
        }}
        columns={sellerColumns}
        data={data?.data || []}
        searchOptions={{
          column: 'username',
          placeholder: 'Search for sellers',
        }}
      />
    </>
  );
};

export default SellersPageContent;

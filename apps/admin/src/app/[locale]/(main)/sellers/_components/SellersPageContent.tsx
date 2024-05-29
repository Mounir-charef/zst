'use client';

import React from 'react';
import sellerColumns from './columns/seller-columns';
import { useGetSellersQuery } from '../../../../../apis/sellerApis';
import { DataTable } from '@mono/ui';
import AddNewButton from '../../../../../components/common/AddNewButton';
import routesConfig from '../../../../../config/routesConfig';

const globalAction = () => {
  return (
    <>
      <AddNewButton href={routesConfig.addNewSeller} text="Add Seller" />
    </>
  );
};

const SellersPageContent = () => {
  const { data } = useGetSellersQuery({});
  return (
    <>
      <DataTable
        variant="items-table"
        header={{
          title: 'Sellers',
          description: 'Manage your sellers',
        }}
        columns={sellerColumns}
        globalAction={globalAction}
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

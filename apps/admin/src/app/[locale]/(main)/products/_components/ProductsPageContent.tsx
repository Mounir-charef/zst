'use client';

import React from 'react';
import productColumns from './columns/product-columns';
import { useGetProductsQuery } from '../../../../../apis/productApis';
import { DataTable } from '@mono/ui';
import AddNewButton from '../../../../../components/common/AddNewButton';
import routesConfig from '../../../../../config/routesConfig';
import statuses from '../../../../../data/statuses';

const globalAction = () => {
  return (
    <>
      <AddNewButton href={routesConfig.addNewProduct} text="Add Product" />
    </>
  );
};

const ProductsPageContent = () => {
  const { data } = useGetProductsQuery({});

  return (
    <>
      <DataTable
        variant="items-table"
        header={{
          title: 'Products',
          description: 'Manage your products and stock.',
        }}
        data={data?.data || []}
        columns={productColumns}
        globalFilter={{
          column: 'status',
          options: statuses,
        }}
        globalAction={globalAction}
        searchOptions={{
          column: 'name',
          placeholder: 'Search for products',
        }}
      />
    </>
  );
};

export default ProductsPageContent;

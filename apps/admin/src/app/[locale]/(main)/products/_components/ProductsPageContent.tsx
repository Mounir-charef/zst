'use client';

import React from 'react';
import productColumns from './columns/product-columns';
import { useGetProductsQuery } from '../../../../../apis/productApis';
import { DataTable } from '@mono/ui';

const ProductsPageContent = () => {
  const { data } = useGetProductsQuery({});

  return (
    <>
      <DataTable
        header={{
          title: 'Products',
          description: 'Manage your products and stock.',
        }}
        data={data?.data || []}
        columns={productColumns}
        searchOptions={{
          column: 'name',
          placeholder: 'Search for products',
        }}
      />
    </>
  );
};

export default ProductsPageContent;

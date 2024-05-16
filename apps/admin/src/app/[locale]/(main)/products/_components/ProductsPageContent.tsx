'use client';

import React from 'react';
import productColumns from './columns/productColumns';
import useTable from '../../../../../hooks/useTable';
import { useGetProductsQuery } from '../../../../../apis/productApis';
import ProductsPageHeader from './ProductsPageHeader';
import { TypedProductListing } from '../../../../../types/product';
import { BaseDataItem } from '../../../../../types/common';

const ProductsPageContent = () => {
  const { Table, search, handleSearch } = useTable<
    TypedProductListing & BaseDataItem
  >({
    useQuery: useGetProductsQuery,
    columns: productColumns,
  });

  return (
    <>
      <ProductsPageHeader search={search} handleSearch={handleSearch} />
      {Table}
    </>
  );
};

export default ProductsPageContent;

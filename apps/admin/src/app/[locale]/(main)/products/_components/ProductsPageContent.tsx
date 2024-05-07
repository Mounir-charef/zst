'use client';

import React, { useState } from 'react';
import DataTable from '../../../../../components/ui/DataTable';
import products from '../../../../../data/products';
import productColumns from './columns/productColumns';
import ListingHeaderCard from '../../../../../components/common/listingHeader/ListingHeaderCard';
import ListingHeaderTitle from '../../../../../components/common/listingHeader/ListingHeaderTitle';
import ListingHeaderFilterButton from '../../../../../components/common/listingHeader/ListingHeaderFilterButton';
import ListingHeaderBottomFilters from '../../../../../components/common/listingHeader/ListingHeaderBottomFilters';

const ProductsPageContent = () => {
  const [page, setPage] = useState(1);
  return (
    <>
      <ListingHeaderCard className="">
        <div>
          <ListingHeaderTitle title="Products" />
          <ListingHeaderFilterButton />
        </div>
        <ListingHeaderBottomFilters
          filters={[
            { name: 'group', label: 'Filter By Group', options: [] },
            { name: 'category', label: 'Filter By Category', options: [] },
            { name: 'type', label: 'Filter by Product Type', options: [] },
          ]}
        />
      </ListingHeaderCard>
      <DataTable
        data={products}
        columns={productColumns}
        pagination={{
          currentPage: page,
          totalPages: products.length,
          onChange: setPage,
        }}
      />
    </>
  );
};

export default ProductsPageContent;

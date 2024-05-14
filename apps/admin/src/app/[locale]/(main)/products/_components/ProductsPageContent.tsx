'use client';

import React, { useState } from 'react';
import DataTable from '../../../../../components/ui/DataTable';
import products from '../../../../../data/products';
import productColumns from './columns/productColumns';
import ListingHeaderCard from '../../../../../components/common/listingHeader/ListingHeaderCard';
import ListingHeaderTitle from '../../../../../components/common/listingHeader/ListingHeaderTitle';
import ListingHeaderFilterButton from '../../../../../components/common/listingHeader/ListingHeaderFilterButton';
import ListingHeaderBottomFilters from '../../../../../components/common/listingHeader/ListingHeaderBottomFilters';
import { useDisclosure } from '@mono/util';
import { MdOutlineSearch } from 'react-icons/md';
import { Input } from '@mono/ui';

const ProductsPageContent = () => {
  const [page, setPage] = useState(1);
  const { isOpen, toggle } = useDisclosure(true);
  return (
    <>
      <ListingHeaderCard className="">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <ListingHeaderTitle title="Products" />
          <div className="flex w-full flex-col items-center gap-x-5 gap-y-4 md:w-2/4 md:flex-row">
            <div className="relative w-full flex-1 md:w-auto">
              <MdOutlineSearch
                size={20}
                className="text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2"
              />
              <Input placeholder="Search by Name" className="pl-10" />
            </div>
            <ListingHeaderFilterButton isOpen={isOpen} onClick={toggle} />
          </div>
        </div>
        {isOpen && (
          <ListingHeaderBottomFilters
            filters={[
              { name: 'group', label: 'Filter By Group', options: [] },
              { name: 'category', label: 'Filter By Category', options: [] },
              { name: 'type', label: 'Filter by Product Type', options: [] },
            ]}
          />
        )}
      </ListingHeaderCard>
      <DataTable
        data={products}
        columns={productColumns}
        pagination={{
          currentPage: page,
          totalPages: products.length,
          onPageChange: setPage,
          onPageSizeChange(pageSize) {},
          pageSize: 1,
        }}
      />
    </>
  );
};

export default ProductsPageContent;

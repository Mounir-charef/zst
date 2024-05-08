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
import Input from '../../../../../components/ui/form/input/Input';
import { MdOutlineSearch } from "react-icons/md";

const ProductsPageContent = () => {
  const [page, setPage] = useState(1);
  const { isOpen, toggle } = useDisclosure(true)
  return (
    <>
      <ListingHeaderCard className="">
        <div className='flex items-center flex-col md:flex-row justify-between gap-4'>
          <ListingHeaderTitle title="Products" />
          <div className='flex flex-col md:flex-row items-center gap-y-4 gap-x-5 w-full md:w-2/4'>
            <div className='relative flex-1 w-full md:w-auto'>
              <MdOutlineSearch size={20} className='absolute top-1/2 -translate-y-1/2 left-3 text-muted' />
              <Input placeholder='Search by Name' className='pl-10' />
            </div>
            <ListingHeaderFilterButton isOpen={isOpen} onClick={toggle} />
          </div>
        </div>
        {
          isOpen && <ListingHeaderBottomFilters
          filters={[
            { name: 'group', label: 'Filter By Group', options: [] },
            { name: 'category', label: 'Filter By Category', options: [] },
            { name: 'type', label: 'Filter by Product Type', options: [] },
          ]}
        /> 
        }
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

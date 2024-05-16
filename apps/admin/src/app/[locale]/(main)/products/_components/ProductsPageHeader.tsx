'use client';

import React from 'react';
import ListingHeaderCard from '../../../../../components/common/listingHeader/ListingHeaderCard';
import ListingHeaderTitle from '../../../../../components/common/listingHeader/ListingHeaderTitle';
import { MdOutlineSearch } from 'react-icons/md';
import { Input } from '@mono/ui';
import ListingHeaderFilterButton from '../../../../../components/common/listingHeader/ListingHeaderFilterButton';
import ListingHeaderBottomFilters from '../../../../../components/common/listingHeader/ListingHeaderBottomFilters';
import { useDisclosure } from '@mono/util';
import { HandleSearch, TypedSearch } from '../../../../../hooks/useSearch';

interface ProductsPageHeaderProps {
  search: TypedSearch;
  handleSearch: HandleSearch;
}

const ProductsPageHeader = ({
  search,
  handleSearch,
}: ProductsPageHeaderProps) => {
  const { isOpen, toggle } = useDisclosure(true);
  return (
    <ListingHeaderCard className="">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <ListingHeaderTitle title="Products" />
        <div className="flex w-full flex-col items-center gap-x-5 gap-y-4 md:w-2/4 md:flex-row">
          <div className="relative w-full flex-1 md:w-auto">
            <MdOutlineSearch
              size={20}
              className="text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2"
            />
            <Input
              value={search.name}
              placeholder="Search by Name"
              className="pl-10"
              onChange={(e) => handleSearch('name', e.target.value)}
            />
          </div>
          <ListingHeaderFilterButton isOpen={isOpen} onClick={toggle} />
        </div>
      </div>
      {isOpen && (
        <ListingHeaderBottomFilters
          values={search}
          onChange={(name, value) => handleSearch(name, value as string, false)}
          filters={[
            {
              name: 'group',
              label: 'Filter By Group',
              options: Array.from({ length: 5 }).map((_, index) => ({
                label: `Group ${index + 1}`,
                value: index,
              })),
            },
            {
              name: 'category',
              label: 'Filter By Category',
              options: Array.from({ length: 5 }).map((_, index) => ({
                label: `Category ${index + 1}`,
                value: index,
              })),
            },
            {
              name: 'type',
              label: 'Filter by Product Type',
              options: Array.from({ length: 5 }).map((_, index) => ({
                label: `Product Type ${index + 1}`,
                value: index,
              })),
            },
          ]}
        />
      )}
    </ListingHeaderCard>
  );
};

export default ProductsPageHeader;

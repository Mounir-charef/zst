'use client';

import React from 'react';
import useTable from '../../../../../hooks/useTable';
import ListingHeaderCard from '../../../../../components/common/listingHeader/ListingHeaderCard';
import ListingHeaderTitle from '../../../../../components/common/listingHeader/ListingHeaderTitle';
import sellerColumns from './columns/seller-columns';
import { useGetSellersQuery } from '../../../../../apis/sellerApis';

const SellersPageContent = () => {
  const { Table } = useTable({
    columns: sellerColumns,
    useQuery: useGetSellersQuery,
  });
  return (
    <>
      <ListingHeaderCard>
        <ListingHeaderTitle title="Sellers" />
      </ListingHeaderCard>
      {Table}
    </>
  );
};

export default SellersPageContent;

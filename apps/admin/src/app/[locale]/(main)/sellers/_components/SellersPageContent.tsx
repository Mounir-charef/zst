'use client';

import React from 'react';
import useTable from '../../../../../hooks/useTable';
import ListingHeaderCard from '../../../../../components/common/listingHeader/ListingHeaderCard';
import ListingHeaderTitle from '../../../../../components/common/listingHeader/ListingHeaderTitle';
import { useGetUsersQuery } from '../../../../../apis/userApis';
import sellerColumns from './columns/seller-columns';

const SellersPageContent = () => {
  const { Table } = useTable({
    columns: sellerColumns,
    useQuery: useGetUsersQuery,
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

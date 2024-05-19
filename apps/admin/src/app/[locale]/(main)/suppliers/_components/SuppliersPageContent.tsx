'use client';

import React from 'react';
import useTable from '../../../../../hooks/useTable';
import supplierColumns from './columns/suppiler-columns';
import { useGetUsersQuery } from '../../../../../apis/userApis';
import ListingHeaderCard from '../../../../../components/common/listingHeader/ListingHeaderCard';
import ListingHeaderTitle from '../../../../../components/common/listingHeader/ListingHeaderTitle';

const SuppliersPageContent = () => {
  const { Table } = useTable({
    useQuery: useGetUsersQuery,
    columns: supplierColumns,
  });
  return (
    <>
      <ListingHeaderCard>
        <ListingHeaderTitle title="Suppliers" />
      </ListingHeaderCard>
      {Table}
    </>
  );
};

export default SuppliersPageContent;

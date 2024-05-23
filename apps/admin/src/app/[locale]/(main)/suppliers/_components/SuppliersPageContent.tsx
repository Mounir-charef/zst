'use client';

import React from 'react';
import useTable from '../../../../../hooks/useTable';
import supplierColumns from './columns/suppiler-columns';
import ListingHeaderCard from '../../../../../components/common/listingHeader/ListingHeaderCard';
import ListingHeaderTitle from '../../../../../components/common/listingHeader/ListingHeaderTitle';
import { useGetSuppliersQuery } from '../../../../../apis/supplierApis';

const SuppliersPageContent = () => {
  const { Table } = useTable({
    useQuery: useGetSuppliersQuery,
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

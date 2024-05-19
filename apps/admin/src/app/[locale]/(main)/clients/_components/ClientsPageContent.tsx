'use client';

import React from 'react';
import useTable from '../../../../../hooks/useTable';
import ListingHeaderCard from '../../../../../components/common/listingHeader/ListingHeaderCard';
import ListingHeaderTitle from '../../../../../components/common/listingHeader/ListingHeaderTitle';
import clientColumns from './columns/client-columns';
import { useGetUsersQuery } from '../../../../../apis/userApis';

const ClientsPageContent = () => {
  const { Table } = useTable({
    useQuery: useGetUsersQuery,
    columns: clientColumns,
  });
  return (
    <>
      <ListingHeaderCard>
        <ListingHeaderTitle title="Clients" />
      </ListingHeaderCard>
      {Table}
    </>
  );
};

export default ClientsPageContent;

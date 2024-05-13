'use client';

import { useState } from 'react';
import ListingHeaderCard from '../../../../../../components/common/listingHeader/ListingHeaderCard';
import ListingHeaderTitle from '../../../../../../components/common/listingHeader/ListingHeaderTitle';
import DataTable from '../../../../../../components/ui/DataTable';
import { useQuery } from '@tanstack/react-query';
import userClient from '../../../../../../apis/clients/userClient';
import { Button } from '../../../../../../components/ui/Button';
import { useGetUsersQuery } from '../../../../../../apis/userApis';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Username',
    dataIndex: 'username',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
  },
];

// const data = [
//   { name: 'Jack', age: 28, address: 'some where', key: '1' },
//   { name: 'Rose', age: 36, address: 'some where', key: '2' },
// ];

const ListingPageContent = ({}: {}) => {
  const [filters, setFilters] = useState({
    page: 1,
  });

  const { data, refetch } = useGetUsersQuery();

  return (
    <>
      <ListingHeaderCard className="flex justify-between">
        <ListingHeaderTitle title="Listing" />
        <Button onClick={() => refetch()}>Refetch</Button>
      </ListingHeaderCard>
      <DataTable
        columns={columns}
        data={data}
        pagination={{
          currentPage: filters.page,
          onChange(page) {
            setFilters((current) => ({
              ...current,
              page,
            }));
          },
          totalPages: 1000,
        }}
      />
    </>
  );
};

export default ListingPageContent;

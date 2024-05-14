'use client';

import { useState } from 'react';
import ListingHeaderCard from '../../../../../../components/common/listingHeader/ListingHeaderCard';
import ListingHeaderTitle from '../../../../../../components/common/listingHeader/ListingHeaderTitle';
import DataTable from '../../../../../../components/ui/DataTable';
import { useGetUsersQuery } from '../../../../../../apis/userApis';
import { Checkbox } from '@mono/ui';
import { ID } from '../../../../../../types/common';
import useSelectRows from '../../../../../../hooks/useSelectRows';

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

const ListingPageContent = () => {
  const [filters, setFilters] = useState({
    page: 1,
    pageSize: 10,
  });

  const handleChange = (name: string, value: unknown) => {
    setFilters((current) => ({
      ...current,
      [name]: value,
    }));
  };

  // const [selectedRows, setSelectedRows] = useState<ID[]>([]);

  const { selectedRows, setSelectedRows } = useSelectRows();

  const { data } = useGetUsersQuery();

  return (
    <>
      <ListingHeaderCard className="flex justify-between">
        <ListingHeaderTitle title="Listing" />
      </ListingHeaderCard>
      <DataTable
        selectableRows
        columns={columns}
        data={data}
        selectedRows={selectedRows}
        setSelectedRows={setSelectedRows}
        pagination={{
          pageSize: filters.pageSize,
          onPageSizeChange(pageSize) {
            handleChange('pageSize', pageSize);
          },
          currentPage: filters.page,
          onPageChange(page) {
            handleChange('page', page);
          },
          totalPages: 1000,
        }}
      />
    </>
  );
};

export default ListingPageContent;

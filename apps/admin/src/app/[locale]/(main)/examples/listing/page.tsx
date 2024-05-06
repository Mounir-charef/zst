'use client';

import { useState } from 'react';
import { Card, CardContent } from '../../../../../components/ui/Card';
import DataTable from '../../../../../components/ui/DataTable';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Operations',
    render: () => <a href="#">Delete</a>,
  },
];

const data = [
  { name: 'Jack', age: 28, address: 'some where', key: '1' },
  { name: 'Rose', age: 36, address: 'some where', key: '2' },
];

const Page = () => {
  const [filters, setFilters] = useState({
    page: 1,
  });
  return (
    <>
      <Card className="mb-8">
        <CardContent>Title</CardContent>
      </Card>
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

export default Page;

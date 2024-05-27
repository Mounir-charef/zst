'use client';

import { DataTable } from '@mono/ui';
import { useGetAdminsQuery } from '../../../../../apis/adminApis';
import adminColumns from './columns/admin-columns';

const AdminsPageContent = () => {
  const { data } = useGetAdminsQuery({});
  return (
    <>
      <DataTable
        header={{
          title: 'Admins',
          description: 'Manage your admins',
        }}
        columns={adminColumns}
        data={data?.data || []}
        searchOptions={{
          column: 'username',
          placeholder: 'Search for admins',
        }}
      />
    </>
  );
};

export default AdminsPageContent;

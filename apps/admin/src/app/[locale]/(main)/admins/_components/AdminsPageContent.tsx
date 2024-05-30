'use client';

import { DataTable } from '@mono/ui';
import { useGetAdminsQuery } from '../../../../../apis/adminApis';
import adminColumns from './columns/admin-columns';
import AddNewButton from '../../../../../components/common/AddNewButton';
import routesConfig from '../../../../../config/routesConfig';

const globalAction = () => {
  return (
    <>
      <AddNewButton href={routesConfig.addNewAdmin} text="Add Admin" />
    </>
  );
};

const AdminsPageContent = () => {
  const { data } = useGetAdminsQuery({});
  return (
    <>
      <DataTable
        variant="items-table"
        header={{
          title: 'Admins',
          description: 'Manage your admins',
        }}
        columns={adminColumns}
        globalAction={globalAction}
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

import React from 'react';
import AdminsPageContent from './_components/AdminsPageContent';
import useServerData from '../../../../hooks/useServerData';
import { getUsersQueryOptions } from '../../../../apis/userApis';
import { SearchParams } from '../../../../apis/_api-utils';

const AdminsPage = async ({ searchParams }: { searchParams: SearchParams }) => {
  const { ServerData } = await useServerData({
    ...getUsersQueryOptions(searchParams),
  });
  return (
    <ServerData>
      <AdminsPageContent />
    </ServerData>
  );
};

export default AdminsPage;

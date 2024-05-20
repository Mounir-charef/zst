import React from 'react';
import AdminsPageContent from './_components/AdminsPageContent';
import useServerData from '../../../../hooks/useServerData';
import { SearchParams } from '../../../../apis/_api-utils';
import { getAdminsQueryOptions } from '../../../../apis/adminApis';

const AdminsPage = async ({ searchParams }: { searchParams: SearchParams }) => {
  const { ServerData } = await useServerData({
    ...getAdminsQueryOptions(searchParams),
  });

  return (
    <ServerData>
      <AdminsPageContent />
    </ServerData>
  );
};

export default AdminsPage;

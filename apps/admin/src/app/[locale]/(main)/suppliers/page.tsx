import React from 'react';
import SuppliersPageContent from './_components/SuppliersPageContent';
import useServerData from '../../../../hooks/useServerData';
import { SearchParams } from '../../../../apis/_api-utils';
import { getSuppliersQueryOptions } from '../../../../apis/supplierApis';

const SuppliersPage = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const { ServerData } = await useServerData({
    ...getSuppliersQueryOptions(searchParams),
  });

  return (
    <ServerData>
      <SuppliersPageContent />
    </ServerData>
  );
};

export default SuppliersPage;

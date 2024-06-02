'use client';
import { useGetOffersQuery } from '../../../../../apis/offerApis';
import { DataTable } from '@mono/ui';
import offerColumns from './columns/offer-columns';

const OffersPageContent = () => {
  const { data } = useGetOffersQuery({});
  return (
    <DataTable
      variant="items-table"
      header={{
        title: 'Offers',
        description: 'Manage your offers',
      }}
      data={data?.data || []}
      columns={offerColumns}
    />
  );
};

export default OffersPageContent;

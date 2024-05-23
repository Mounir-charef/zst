'use client';

import { useGetAdminsQuery } from '../../../../../apis/adminApis';
import ListingHeaderCard from '../../../../../components/common/listingHeader/ListingHeaderCard';
import ListingHeaderTitle from '../../../../../components/common/listingHeader/ListingHeaderTitle';
import useTable from '../../../../../hooks/useTable';
import adminColumns from './columns/admin-columns';

const AdminsPageContent = () => {
  const { Table } = useTable({
    columns: adminColumns,
    useQuery: useGetAdminsQuery,
  });
  return (
    <>
      <ListingHeaderCard>
        <ListingHeaderTitle title="Admins" />
      </ListingHeaderCard>
      {Table}
    </>
  );
};

export default AdminsPageContent;

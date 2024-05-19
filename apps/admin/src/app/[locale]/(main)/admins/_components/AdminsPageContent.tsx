'use client';

import { useGetUsersQuery } from '../../../../../apis/userApis';
import ListingHeaderCard from '../../../../../components/common/listingHeader/ListingHeaderCard';
import ListingHeaderTitle from '../../../../../components/common/listingHeader/ListingHeaderTitle';
import DataTable from '../../../../../components/ui/DataTable';
import useTable from '../../../../../hooks/useTable';
import adminColumns from './columns/admin-columns';

const AdminsPageContent = () => {
  const { Table } = useTable({
    columns: adminColumns,
    useQuery: useGetUsersQuery,
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

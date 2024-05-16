'use client';

import ListingHeaderCard from '../../../../../../components/common/listingHeader/ListingHeaderCard';
import ListingHeaderTitle from '../../../../../../components/common/listingHeader/ListingHeaderTitle';
import { useGetUsersQuery } from '../../../../../../apis/userApis';
import Select from '../../../../../../components/ui/form/select/Select';
import useTable from '../../../../../../hooks/useTable';
import { Input } from '@mono/ui';

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
  const { Table, search, handleSearch } = useTable({
    useQuery: useGetUsersQuery,
    columns,
  });

  return (
    <>
      <ListingHeaderCard>
        <div className="flex justify-between">
          <ListingHeaderTitle title="Listing" />
          <div>
            <Input
              placeholder="Search..."
              value={search.search}
              onChange={(e) => handleSearch('search', e.target.value)}
            />
          </div>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-5">
          <Select
            value={search.option1}
            onChange={(value) =>
              handleSearch('option1', value as string, false)
            }
            options={Array.from({ length: 5 }).map((_, index) => ({
              label: `Label ${index + 1}`,
              value: index + '',
            }))}
          />
          <Select
            value={search.option2}
            onChange={(value) =>
              handleSearch('option2', value as string, false)
            }
            options={Array.from({ length: 5 }).map((_, index) => ({
              label: `Label ${index + 1}`,
              value: index + '',
            }))}
          />
        </div>
      </ListingHeaderCard>
      {Table}
    </>
  );
};

export default ListingPageContent;

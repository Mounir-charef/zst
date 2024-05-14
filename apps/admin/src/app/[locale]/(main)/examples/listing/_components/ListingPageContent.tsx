'use client';

import ListingHeaderCard from '../../../../../../components/common/listingHeader/ListingHeaderCard';
import ListingHeaderTitle from '../../../../../../components/common/listingHeader/ListingHeaderTitle';
import DataTable from '../../../../../../components/ui/DataTable';
import { useGetUsersQuery } from '../../../../../../apis/userApis';
import useSelectRows from '../../../../../../hooks/useSelectRows';
import useSearch from '../../../../../../hooks/useSearch';
import Select from '../../../../../../components/ui/form/select/Select';

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
  const { handleSearch, search, searchValues } = useSearch();
  const { selectedRows, setSelectedRows } = useSelectRows();
  const { data, isLoading } = useGetUsersQuery(searchValues);

  // console.log({ data, isLoading });

  return (
    <>
      <ListingHeaderCard className="">
        <ListingHeaderTitle title="Listing" />
        <div className="mt-5 grid grid-cols-2">
          <Select
            value={search.option1}
            onChange={(value) => handleSearch('option1', value as string)}
            options={Array.from({ length: 5 }).map((_, index) => ({
              label: `Label ${index + 1}`,
              value: index + '',
            }))}
          />
          <Select
            value={search.option2}
            onChange={(value) => handleSearch('option2', value as string)}
            options={Array.from({ length: 5 }).map((_, index) => ({
              label: `Label ${index + 1}`,
              value: index + '',
            }))}
          />
        </div>
      </ListingHeaderCard>
      <DataTable
        selectableRows
        columns={columns}
        data={data}
        selectedRows={selectedRows}
        setSelectedRows={setSelectedRows}
        pagination={{
          pageSize: search.pageSize ? parseInt(search.pageSize) : 10,
          onPageSizeChange(pageSize) {
            handleSearch('pageSize', pageSize + '', false);
          },
          currentPage: search.page ? parseInt(search.page) : 1,
          onPageChange(page) {
            handleSearch('page', page + '', false);
          },
          totalPages: 1000,
        }}
      />
    </>
  );
};

export default ListingPageContent;

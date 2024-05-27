'use client';

import { useGetCategoriesQuery } from '../../../../../apis/categoryApis';
import categoryColumns from './columns/category-columns';
import { DataTable } from '@mono/ui';

const CategoriesPageContent = () => {
  const { data } = useGetCategoriesQuery({});
  return (
    <>
      <DataTable
        header={{
          title: 'Categories',
          description: 'Manage your categories',
        }}
        data={data?.data || []}
        columns={categoryColumns}
        searchOptions={{
          column: 'name',
          placeholder: 'Search for categories',
        }}
        // filterOptions={filterOptions}
      />
    </>
  );
};

export default CategoriesPageContent;

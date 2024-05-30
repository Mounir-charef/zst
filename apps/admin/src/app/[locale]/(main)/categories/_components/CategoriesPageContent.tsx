'use client';

import { useGetCategoriesQuery } from '../../../../../apis/categoryApis';
import AddNewButton from '../../../../../components/common/AddNewButton';
import routesConfig from '../../../../../config/routesConfig';
import categoryColumns from './columns/category-columns';
import { DataTable } from '@mono/ui';

const globalAction = () => {
  return (
    <>
      <AddNewButton href={routesConfig.addNewCategory} text="Add Category" />
    </>
  );
};

const CategoriesPageContent = () => {
  const { data } = useGetCategoriesQuery({});
  return (
    <>
      <DataTable
        variant="items-table"
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
        globalAction={globalAction}
      />
    </>
  );
};

export default CategoriesPageContent;

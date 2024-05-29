'use client';

import attributeColumns from './columns/attribute-columns';
import { useGetAttributesQuery } from '../../../../../apis/attributeApis';
import { DataTable } from '@mono/ui';
import AddNewButton from '../../../../../components/common/AddNewButton';
import routesConfig from '../../../../../config/routesConfig';

const globalAction = () => {
  return (
    <>
      <AddNewButton href={routesConfig.addNewAttribute} text="Add Attribute" />
    </>
  );
};

const AttributesPageContent = () => {
  const { data } = useGetAttributesQuery({});
  return (
    <>
      <DataTable
        variant="items-table"
        header={{
          title: 'Attributes',
          description: 'Manage your attributes',
        }}
        columns={attributeColumns}
        globalAction={globalAction}
        data={data?.data || []}
        searchOptions={{
          column: 'name',
          placeholder: 'Search for attributes',
        }}
      />
    </>
  );
};

export default AttributesPageContent;

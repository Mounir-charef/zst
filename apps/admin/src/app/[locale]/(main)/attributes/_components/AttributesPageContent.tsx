'use client';

import attributeColumns from './columns/attribute-columns';
import { useGetAttributesQuery } from '../../../../../apis/attributeApis';
import { DataTable } from '@mono/ui';

const AttributesPageContent = () => {
  const { data } = useGetAttributesQuery({});
  return (
    <>
      <DataTable
        header={{
          title: 'Attributes',
          description: 'Manage your attributes',
        }}
        columns={attributeColumns}
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

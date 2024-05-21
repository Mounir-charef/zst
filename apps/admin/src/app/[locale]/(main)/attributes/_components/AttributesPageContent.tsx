'use client';

import attributeColumns from './columns/attribute-columns';
import ListingHeaderCard from '../../../../../components/common/listingHeader/ListingHeaderCard';
import ListingHeaderTitle from '../../../../../components/common/listingHeader/ListingHeaderTitle';
import useTable from '../../../../../hooks/useTable';
import { TypedAttributeListing } from '../../../../../types/attribute';
import { BaseDataItem } from '../../../../../types/common';
import { useGetAttributesQuery } from '../../../../../apis/attributeApis';

const AttributesPageContent = () => {
  const { Table } = useTable({
    columns: attributeColumns,
    useQuery: useGetAttributesQuery,
  });
  return (
    <>
      <ListingHeaderCard>
        <ListingHeaderTitle title="Attributes" />
      </ListingHeaderCard>
      {Table}
    </>
  );
};

export default AttributesPageContent;

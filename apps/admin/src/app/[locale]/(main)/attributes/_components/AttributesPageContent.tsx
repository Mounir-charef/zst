'use client';
import DataTable from '../../../../../components/ui/DataTable';
import attributeColumns from './columns/attributeColumns';
import attributes from '../../../../../data/attributes';
import ListingHeaderCard from '../../../../../components/common/listingHeader/ListingHeaderCard';
import ListingHeaderTitle from '../../../../../components/common/listingHeader/ListingHeaderTitle';
import { useState } from 'react';

const AttributesPageContent = () => {
  const [page, setPage] = useState(1);
  return (
    <>
      <ListingHeaderCard>
        <ListingHeaderTitle title="Attributes" />
      </ListingHeaderCard>
      <DataTable
        columns={attributeColumns}
        data={attributes}
        pagination={{
          currentPage: page,
          totalPages: attributes.length,
          onChange: setPage,
        }}
      />
    </>
  );
};

export default AttributesPageContent;

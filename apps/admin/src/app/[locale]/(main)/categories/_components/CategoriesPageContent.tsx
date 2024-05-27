'use client';

import useTable from '../../../../../hooks/useTable';
import { useGetCategoriesQuery } from '../../../../../apis/categoryApis';
import categoryColumns from './columns/category-columns';
import ListingHeaderCard from '../../../../../components/common/listingHeader/ListingHeaderCard';
import ListingHeaderTitle from '../../../../../components/common/listingHeader/ListingHeaderTitle';

const CategoriesPageContent = () => {
  const { Table } = useTable({
    useQuery: useGetCategoriesQuery,
    columns: categoryColumns,
  });
  return (
    <>
      <ListingHeaderCard>
        <ListingHeaderTitle title="Categories" />
      </ListingHeaderCard>
      {Table}
    </>
  );
};

export default CategoriesPageContent;

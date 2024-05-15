import { SearchParams } from '../../../../apis/_api-utils';
import { getProductsQueryOptions } from '../../../../apis/productApis';
import useServerData from '../../../../hooks/useServerData';
import ProductsPageContent from './_components/ProductsPageContent';

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const { ServerData } = await useServerData({
    ...getProductsQueryOptions(searchParams),
  });

  return (
    <ServerData>
      <ProductsPageContent />
    </ServerData>
  );
};

export default ProductsPage;

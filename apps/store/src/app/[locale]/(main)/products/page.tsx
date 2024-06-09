import { DataTable } from '@mono/ui';
import { Metadata } from 'next';
import { z } from 'zod';
import products from '../../../../lib/data/products/products.json';
import { productSchema } from '../../../../validation/product-schema';
import { globalAction } from './_components/Actions';
import { columns } from './_components/Columns';
import { globalFilter, itemsFilters } from './_components/filters';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Products page',
};

// Simulate a fetch from an API
async function getProducts() {
  return z.array(productSchema).parse(products);
}

const ProductsPage = async () => {
  const products = await getProducts();
  return (
    <DataTable
      variant="items-table"
      header={{
        title: 'Products',
        description: 'Manage your products and view their inventory .',
      }}
      data={products}
      columns={columns}
      searchOptions={{
        column: 'name',
        placeholder: 'Search for products',
      }}
      filterOptions={itemsFilters}
      globalFilter={globalFilter}
      globalAction={globalAction}
    />
  );
};

export default ProductsPage;

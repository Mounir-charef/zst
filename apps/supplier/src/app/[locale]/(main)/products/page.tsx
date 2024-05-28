import { DataTable } from '@mono/ui';
import { promises as fs } from 'fs';
import { Metadata } from 'next';
import path from 'path';
import { z } from 'zod';
import { globalAction } from './_components/Actions';
import { columns } from './_components/Columns';
import { globalFilter, itemsFilters } from './_components/filters';
import { productSchema } from './_data/schema';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Products page',
};

// Simulate a fetch from an API
async function getProducts() {
  const data = await fs.readFile(
    path.join(
      process.cwd(),
      'src/app/[locale]/(main)/products/_data/products.json',
    ),
  );

  const products = JSON.parse(data.toString());

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

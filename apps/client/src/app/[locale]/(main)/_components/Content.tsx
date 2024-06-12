import { memo } from 'react';
import Section from './Section';
import products from '../_data/products.json';
import ProductsList from './ProductsList';
import CategoryList from './CategoryList';
const trendingProducts = products.map((product) => ({
  ...product,
  trending: true,
}));
const Content = () => {
  return (
    <Section>
      <ProductsList
        title="Trending prodcuts"
        allLink="#"
        products={trendingProducts}
      />
      <ProductsList title="New arrivals" allLink="#" products={products} />
      <CategoryList />
      <ProductsList title="New arrivals" allLink="#" products={products} />
    </Section>
  );
};

export default memo(Content);

import { Card, CardContent, CardHeader, CardTitle } from '@mono/ui';
import { memo } from 'react';
import ProductCard from '../../_components/ProductCard';

const PRODUCTS = [
  {
    image: '/product/mainImage.png',
    description: 'Men sets Custom Logo 100% cotton jogger',
    price: { min: 10.99, max: 12.99 },
    variations: 20,
  },
  {
    image: '/product/mainImage.png',
    description: 'Men sets Custom Logo 100% cotton jogger',
    price: { min: 10.99, max: 12.99 },
    variations: 20,
  },
  {
    image: '/product/mainImage.png',
    description: 'Men sets Custom Logo 100% cotton jogger',
    price: { min: 10.99, max: 12.99 },
    variations: 20,
  },
  {
    image: '/product/mainImage.png',
    description: 'Men sets Custom Logo 100% cotton jogger',
    price: { min: 10.99, max: 12.99 },
    variations: 20,
  },
];

const FrequentProductsCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Frequently bought together</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {PRODUCTS.map((product, index) => (
          <ProductCard {...product} key={index} />
        ))}
      </CardContent>
    </Card>
  );
};

export default memo(FrequentProductsCard);

import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  buttonVariants,
} from '@mono/ui';
import { memo } from 'react';
import ProductCard from '../../_components/ProductCard';
import { Link } from '../../../../../../navigation';
import { ArrowRight } from 'lucide-react';

const RECOMMENDATIONS = [
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

const RecommendationsCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Other recommendations for your business</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 md:flex-row">
        {RECOMMENDATIONS.map((recommendation, index) => (
          <ProductCard key={index} {...recommendation} />
        ))}
      </CardContent>
      <CardFooter>
        <Link
          href="/products"
          className={buttonVariants({
            variant: 'outline',
            size: 'lg',
            className: 'group w-full gap-2',
          })}
        >
          <span>Show All</span>{' '}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default memo(RecommendationsCard);

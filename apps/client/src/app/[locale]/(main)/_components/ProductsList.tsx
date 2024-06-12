import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  ScrollArea,
  ScrollBar,
} from '@mono/ui';
import { memo } from 'react';
import ProductCard from './ProductCard';
import { Link } from '../../../../navigation';
import { ChevronRight } from 'lucide-react';

interface ProductsListProps {
  title: string;
  allLink: string;
  products: {
    id: string;
    title: string;
    price: {
      min: number;
      max: number;
    };
    image: string;
    variations: number;
  }[];
}

const ProductsList = ({ allLink, products, title }: ProductsListProps) => {
  return (
    <Card className="border-none">
      <CardHeader className="flex-row flex-wrap justify-between gap-2">
        <CardTitle>{title}</CardTitle>
        <Link
          href={allLink}
          className="group flex items-center gap-2 underline"
          target="_blank"
        >
          View all
          <ChevronRight className="size-5 transition group-hover:translate-x-2" />
        </Link>
      </CardHeader>
      <CardContent>
        <ScrollArea>
          <div className="flex w-max space-x-8 pb-4">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default memo(ProductsList);

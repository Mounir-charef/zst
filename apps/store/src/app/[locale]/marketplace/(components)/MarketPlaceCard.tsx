import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@mono/ui';
import { MarketplaceProduct } from 'apps/store/src/dataApi/marketplace';
import Image from 'next/image';
import Link from 'next/link';

export function MarketPlaceCard({ product }: { product: MarketplaceProduct }) {
  return (
    <Link href={`marketplace/${product.id}`}>
      <Card className="w-full hover:-translate-y-2 transition-all duration-150">
        <CardHeader className="pt-4 ">
          <div className="h-60 w-full   relative overflow-hidden">
            <Image src={product.imgUrl} alt="product" fill objectFit="cover" />
          </div>
        </CardHeader>
        <CardContent className="gap-2 pb-2">
          <CardTitle className="text-sm text-gray-500 text-ellipsis overflow-hidden w-full whitespace-nowrap">
            {product.name}
          </CardTitle>
        </CardContent>
        <CardFooter className="flex justify-center gap-4 font-medium text-sm">
          <p>
            ${product.startPrice} - ${product.endPrice}
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
}

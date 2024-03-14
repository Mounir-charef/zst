import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@mono/ui';
import Image from 'next/image';

export type ClothingProduct = {
  id: number;
  name: string;
  imgUrl: string;
  startPrice: number;
  endPrice: number;
};

export function ClothesProductCard({ product }: { product: ClothingProduct }) {
  return (
    <Card className="w-full hover:-translate-y-2 transition-all duration-150">
      <CardHeader className="pt-4">
        <div className="h-40 w-full min-w-48 relative">
          <Image
            className="bg-red-100"
            src={product.imgUrl}
            alt="product"
            fill
            objectFit="cover"
          />
        </div>
      </CardHeader>
      <CardContent className="gap-2 pb-2">
        <CardTitle className="text-sm text-gray-500">{product.name}</CardTitle>
      </CardContent>
      <CardFooter className="flex justify-between gap-4 font-medium text-sm">
        <p>
          ${product.startPrice} - ${product.endPrice}
        </p>
        <Button>+</Button>
      </CardFooter>
    </Card>
  );
}

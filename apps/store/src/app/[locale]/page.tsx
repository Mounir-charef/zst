import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@mono/ui';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Product 1',
    imgUrl:
      'https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F115%2FFOREVER_21.jpg&w=1920&q=75',
    startPrice: 300,
    endPrice: 350,
  },
  {
    id: 2,
    name: 'Product 1',
    imgUrl:
      'https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F115%2FFOREVER_21.jpg&w=1920&q=75',
    startPrice: 300,
    endPrice: 350,
  },
  {
    id: 3,
    name: 'Product 1',
    imgUrl:
      'https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F115%2FFOREVER_21.jpg&w=1920&q=75',
    startPrice: 300,
    endPrice: 350,
  },
  {
    id: 4,
    name: 'Product 1',
    imgUrl:
      'https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F115%2FFOREVER_21.jpg&w=1920&q=75',
    startPrice: 300,
    endPrice: 350,
  },
  {
    id: 5,
    name: 'Product 1',
    imgUrl:
      'https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F115%2FFOREVER_21.jpg&w=1920&q=75',
    startPrice: 300,
    endPrice: 350,
  },
];

const Page = () => {
  const t = useTranslations();
  return (
    <div className="font-bold text-center flex-1 flex items-center justify-center flex-col">
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <ClothesProductCard key={product.id} product={product} />
        ))}
        {products.map((product) => (
          <ClothesProductCard key={product.id} product={product} />
        ))}
        {products.map((product) => (
          <ClothesProductCard key={product.id} product={product} />
        ))}
        {products.map((product) => (
          <ClothesProductCard key={product.id} product={product} />
        ))}
        {products.map((product) => (
          <ClothesProductCard key={product.id} product={product} />
        ))}
        {products.map((product) => (
          <ClothesProductCard key={product.id} product={product} />
        ))}
        {products.map((product) => (
          <ClothesProductCard key={product.id} product={product} />
        ))}
        {products.map((product) => (
          <ClothesProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Page;

export type Product = {
  id: number;
  name: string;
  imgUrl: string;
  startPrice: number;
  endPrice: number;
};

function ClothesProductCard({ product }: { product: Product }) {
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

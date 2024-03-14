import ListingFiltersNavigation from '../../../components/ListingFiltersNavigation/ListingFiltersNavigation';
import ListProducts from './(components)/ListProducts';
import { clothingLinks } from './data/data';

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
  return (
    <div className="flex flex-col">
      <div className="bg-blue-100 flex justify-center items-center h-40">
        SECTION HERO
      </div>
      <div className="flex-1 flex-grow  flex-wrap flex relative">
        <ListingFiltersNavigation links={clothingLinks} />
        <div className="font-bold text-center flex-1 flex items-start p-4 flex-col">
          <ListProducts products={products} />
        </div>
      </div>
    </div>
  );
};

export default Page;

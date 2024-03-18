import { faker } from '@faker-js/faker';
import { clothingRepo } from './clothing-repo';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const page = searchParams.get('page') ?? '1';
  const limit = searchParams.get('limit') ?? '20';

  const search = searchParams.get('search');

  const hasFilters = !!search;

  const filteredData = hasFilters
    ? clothingRepo.find((clothing) => {
        return clothing.name.toLowerCase().includes(search.toLowerCase());
      }) ?? []
    : clothingRepo.getAll();

  const parsedLimit = parseInt(limit);
  const parsedPage = parseInt(page);

  const data = filteredData;
  const startIndex = (parsedPage - 1) * parsedLimit;
  const endIndex = startIndex + parsedLimit;

  // Slice the array to get the items for the current page
  const currentPageData = data.slice(startIndex, endIndex);

  // Calculate the total number of pages
  const totalPages = Math.ceil(data.length / parsedLimit);

  // Return the current page data along with pagination metadata

  return Response.json({
    data: currentPageData,

    meta: {
      currentPage: parsedPage,
      itemsPerPage: parsedLimit,
      totalItems: data?.length,
      totalPages,
    },
  });
}

export async function POST(request: Request) {
  const body = await request.json(); // res now contains body

  const startPrice = faker.number.int(1000);
  const endPrice = startPrice + faker.number.int(80);

  const onSold = faker.datatype.boolean() ? faker.number.int(10) : 0;
  const clothing = {
    name: body.name ?? faker.company.buzzPhrase(),
    startPrice: body.startPrice ?? startPrice,
    endPrice: body.startPrice ?? endPrice,
    imgUrl: body.imgUrl ?? faker.image.urlPicsumPhotos(),
    soldPercent: body.soldPercent ?? onSold,
  };

  console.log(
    '%cappsstoresrcappapiclothing\route.ts:61 clothing',
    'color: #26bfa5;',
    clothing
  );

  clothingRepo.create(clothing);
  return Response.json(clothing);
}

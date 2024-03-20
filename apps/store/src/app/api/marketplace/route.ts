import { faker } from '@faker-js/faker';
import { ProductCondition, marketplaceProductRepo } from './marketplace-repo';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const page = searchParams.get('page') ?? '1';
  const limit = searchParams.get('limit') ?? '20';

  const search = searchParams.get('search');

  const hasFilters = !!search;

  const filteredData = hasFilters
    ? marketplaceProductRepo.find((marketplaceProduct) => {
        return marketplaceProduct.name
          .toLowerCase()
          .includes(search.toLowerCase());
      }) ?? []
    : marketplaceProductRepo.getAll();

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

export enum AttributeType {
  BADGES = 'BADGES',
  TEXT = 'TEXT',
}

export async function POST(request: Request) {
  const body = await request.json(); // res now contains body

  const startPrice = faker.number.int(1000);
  const endPrice = startPrice + faker.number.int(80);

  const marketplaceProduct = {
    name: body.name ?? faker.company.buzzPhrase(),
    startPrice: body.startPrice ?? startPrice,
    endPrice: body.startPrice ?? endPrice,
    imgUrl: body.imgUrl ?? faker.image.urlPicsumPhotos(),
    textDescription: body.description ?? faker.lorem.paragraphs(10, '<br/><br/>\n'),

    details:
      body.details ??
      new Array(faker.number.int(10)).fill('_').map(() =>
        faker.helpers.enumValue(AttributeType) === 'BADGES'
          ? {
              key: faker.word.sample(),
              label: faker.word.sample(),
              type: 'BADGES',
              values: new Array(faker.number.int(10))
                .fill('_')
                .map(() => faker.word.sample()),
            }
          : {
              key: faker.word.sample(),
              label: faker.word.sample(),
              type: 'TEXT',
              value: faker.word.sample(),
            }
      ),
  };

  marketplaceProductRepo.create(marketplaceProduct);
  return Response.json(marketplaceProduct);
}

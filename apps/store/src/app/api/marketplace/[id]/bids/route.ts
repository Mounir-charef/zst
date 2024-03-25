import { faker } from '@faker-js/faker';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const page = searchParams.get('page') ?? '1';
  const limit = searchParams.get('limit') ?? '20';

  const bids = [
    {
      id: faker.number.int(),
      date: faker.date.past().toString(),
      content: faker.lorem.paragraph(10),
      avatar: faker.image.avatar(),
    },
    {
      id: faker.number.int(),
      date: faker.date.past().toString(),
      content: faker.lorem.paragraph(10),
      avatar: faker.image.avatar(),
    },
    {
      id: faker.number.int(),
      date: faker.date.past().toString(),
      content: faker.lorem.paragraph(10),
      avatar: faker.image.avatar(),
    },
    {
      id: faker.number.int(),
      date: faker.date.past().toString(),
      content: faker.lorem.paragraph(10),
      avatar: faker.image.avatar(),
    },
  ];

  const parsedLimit = parseInt(limit);
  const parsedPage = parseInt(page);

  const data = bids;
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

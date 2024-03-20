import { faker } from '@faker-js/faker';
import { marketplaceProductRepo } from '../marketplace-repo';

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const marketplaceProduct = marketplaceProductRepo.getById(
    parseInt(params.id)
  );

  return Response.json(marketplaceProduct);
}

export async function DELETE(
  _request: Request,
  { params }: { params: { id: string } }
) {
  marketplaceProductRepo.delete(parseInt(params.id));

  return Response.json({ message: 'Deleted Successfully' });
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();

  const startPrice = faker.number.int(1000);
  const endPrice = startPrice + faker.number.int(80);

  const onSold = faker.datatype.boolean() ? faker.number.int(10) : 0;
  const marketplaceProduct = {
    name: body.name ?? faker.company.buzzPhrase(),
    startPrice: body.startPrice ?? startPrice,
    endPrice: body.startPrice ?? endPrice,
    imgUrl: body.imgUrl ?? faker.image.urlPicsumPhotos(),
    soldPercent: body.soldPercent ?? onSold,
  };

  const newMarketplaceProduct = marketplaceProductRepo.update(
    parseInt(params.id),
    marketplaceProduct
  );

  return Response.json(newMarketplaceProduct);
}

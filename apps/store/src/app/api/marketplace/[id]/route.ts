import { faker } from '@faker-js/faker';
import { marketplaceProductRepo } from '../marketplace-repo';
import { ProductCondition } from 'apps/store/src/dataApi/marketplace';

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

  const marketplaceProduct = {
    name: body.name ?? faker.company.buzzPhrase(),
    startPrice: body.startPrice ?? startPrice,
    endPrice: body.startPrice ?? endPrice,
    imgUrl: body.imgUrl ?? faker.image.urlPicsumPhotos(),
    details: {
      condition:
        body.details?.condition ?? faker.helpers.enumValue(ProductCondition),
      color: body.details?.color ?? faker.color.human(),
      reference: body.details?.reference ?? faker.internet.domainWord
    },
  };

  const newMarketplaceProduct = marketplaceProductRepo.update(
    parseInt(params.id),
    marketplaceProduct
  );

  return Response.json(newMarketplaceProduct);
}

import { faker } from '@faker-js/faker';
import { marketplaceProductRepo } from '../marketplace-repo';
import { AttributeType } from '../route';

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
  const type = faker.helpers.enumValue(AttributeType);

  const marketplaceProduct = {
    name: body.name ?? faker.company.buzzPhrase(),
    startPrice: body.startPrice ?? startPrice,
    endPrice: body.startPrice ?? endPrice,
    imgUrl: body.imgUrl ?? faker.image.urlPicsumPhotos(),
    attachments:
      body.attachments ??
      new Array(faker.number.int(10))
        .fill('_')
        .map(() => faker.image.urlPicsumPhotos()),
    details:
      body.details ??
      new Array(faker.number.int(10)).fill('_').map(() =>
        type === 'BADGES'
          ? {
              key: 'papers',
              label: 'Papers',
              type: 'array',
              values: [
                'Real estate promotion',
                'Notarial act',
                'Real estate booklet',
                'Construction autorisation',
              ],
            }
          : {
              key: 'id',
              label: 'ID',
              type: 'text',
              value: '40206324',
            }
      ),
  };

  const newMarketplaceProduct = marketplaceProductRepo.update(
    parseInt(params.id),
    marketplaceProduct
  );

  return Response.json(newMarketplaceProduct);
}

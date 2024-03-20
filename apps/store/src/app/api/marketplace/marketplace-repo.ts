import fs from 'fs';

import marketplaceProductsData from './marketplace.json';

export const absolutePath = './src/app/api/';

interface MarketplaceProduct {
  id: number;
  name: string;
  startPrice: number;
  endPrice: number;
  imgUrl: string;
  soldPercent: number;
  createdAt: string;
  updatedAt: string;
}

let marketplaceProducts: MarketplaceProduct[] = marketplaceProductsData;

export const marketplaceProductRepo = {
  getAll: (): MarketplaceProduct[] => marketplaceProducts,
  getById: (id: number): MarketplaceProduct | undefined =>
    marketplaceProducts.find((x) => x.id === id),
  find: (
    predicate: (marketplaceProduct: MarketplaceProduct) => boolean
  ): MarketplaceProduct[] | undefined => marketplaceProducts.filter(predicate),
  create,
  update,
  delete: _delete,
};

function create(
  marketplaceProduct: Omit<MarketplaceProduct, 'id' | 'createdAt' | 'updatedAt'>
) {
  // generate new marketplaceProduct id
  const newId = marketplaceProducts.length
    ? Math.max(...marketplaceProducts.map((x) => x.id)) + 1
    : 1;
  const newMarketplaceProduct: MarketplaceProduct = {
    id: newId,
    ...marketplaceProduct,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  // add and save marketplaceProduct

  marketplaceProducts.push(newMarketplaceProduct);
  saveData();
}

function update(id: number, params: Partial<MarketplaceProduct>) {
  const marketplaceProductIndex = marketplaceProducts.findIndex(
    (x) => x.id === id
  );

  if (marketplaceProductIndex !== -1) {
    // set date updated
    marketplaceProducts[marketplaceProductIndex].updatedAt =
      new Date().toISOString();

    // update and save
    Object.assign(marketplaceProducts[marketplaceProductIndex], params);

    saveData();
    return marketplaceProducts[marketplaceProductIndex];
  }
}

// prefixed with underscore '_' because 'delete' is a reserved word in JavaScript
function _delete(id: number) {
  // filter out deleted marketplaceProduct and save
  marketplaceProducts = marketplaceProducts.filter((x) => x.id !== id);
  saveData();
}

// private helper functions

function saveData() {
  try {
    fs.writeFileSync(
      `${absolutePath}marketplaceProduct/marketplaceProducts.json`,
      JSON.stringify(marketplaceProducts, null, 4)
    );
    console.log('File written successfully.');
  } catch (error) {
    console.error('Error writing to file:', error);
  }
}

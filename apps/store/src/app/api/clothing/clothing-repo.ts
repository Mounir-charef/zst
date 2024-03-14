import fs from 'fs';

import clothesData from './clothes.json';

export const absolutePath = './src/app/api/';

interface Clothing {
  id: number;
  name: string;
  startPrice: number;
  endPrice: number;
  imgUrl: string;
  soldPercent: number;
  createdAt: string;
  updatedAt: string;
}

let clothes: Clothing[] = clothesData;

export const clothingRepo = {
  getAll: (): Clothing[] => clothes,
  getById: (id: number): Clothing | undefined =>
    clothes.find((x) => x.id === id),
  find: (predicate: (clothing: Clothing) => boolean): Clothing[] | undefined =>
    clothes.filter(predicate),
  create,
  update,
  delete: _delete,
};

function create(clothing: Omit<Clothing, 'id' | 'createdAt' | 'updatedAt'>) {
  // generate new clothing id
  const newId = clothes.length ? Math.max(...clothes.map((x) => x.id)) + 1 : 1;
  const newClothing: Clothing = {
    id: newId,
    ...clothing,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  // add and save clothing

  clothes.push(newClothing);
  saveData();
}

function update(id: number, params: Partial<Clothing>) {
  const clothingIndex = clothes.findIndex((x) => x.id === id);

  if (clothingIndex !== -1) {
    // set date updated
    clothes[clothingIndex].updatedAt = new Date().toISOString();

    // update and save
    Object.assign(clothes[clothingIndex], params);

    saveData();
    return clothes[clothingIndex];
  }
}

// prefixed with underscore '_' because 'delete' is a reserved word in JavaScript
function _delete(id: number) {
  // filter out deleted clothing and save
  clothes = clothes.filter((x) => x.id !== id);
  saveData();
}

// private helper functions

function saveData() {
  try {
    fs.writeFileSync(
      `${absolutePath}clothes/clothes.json`,
      JSON.stringify(clothes, null, 4)
    );
    console.log('File written successfully.');
  } catch (error) {
    console.error('Error writing to file:', error);
  }
}

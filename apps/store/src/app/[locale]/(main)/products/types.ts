export type Variant = {
  name: string;
  values: string[];
};

type VariantValue = {
  name: string;
  value: string;
}[];

export type IProductDetails = {
  details: {
    name: string;
    description: string;
  };
  variants: Variant[];
  status: string;
  category: string;
  subcategory?: string;
  stock: {
    variantValues: VariantValue;
    price: number;
    quantity: number;
    image?: string;
  }[];
  productImages: {
    id: string | number;
    url: string;
  }[];
  mainImage: string;
};

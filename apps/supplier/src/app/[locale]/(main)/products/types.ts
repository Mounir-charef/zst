export type Variant = {
  name: string;
  values: string[];
};

export type VariantValue = {
  name: string;
  value: string;
};

export type IProductDetails = {
  details: {
    name: string;
    description: string;
  };
  variants: Variant[];
  status: string;
  category: string;
  subcategory?: string;
  stock:
    | {
        mainVariant: VariantValue;
        image?: string;
        values: {
          variants: VariantValue[];
          price: number;
          quantity: number;
          image?: string;
        }[];
      }[]
    | {
        mainVariant: VariantValue;
        image?: string;
        price: number;
        quantity: number;
      }[];
  productImages: {
    id: string | number;
    url: string;
  }[];
  mainImage: string;
};

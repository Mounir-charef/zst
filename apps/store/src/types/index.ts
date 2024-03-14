import type { NextPage } from 'next';
import type { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<P = object> = NextPage<P> & {
  authenticationRequired?: boolean;
  getLayout?: (page: ReactElement) => ReactNode;
};

export interface GetParams {
  slug: string;
  language?: string;
}

export interface Success {
  success: boolean;
  message: string;
}

export type LayoutProps = {
  readonly children: ReactNode;
};

export interface HomePageProps {
  variables: {
    products: any;
    popularProducts?: any;
    bestSellingProducts?: any;
    categories: any;
    types: any;
    layoutSettings: any;
  };
  layout: string;
}

export interface SearchParamOptions {
  type: string;
  name: string;
  categories: string;
  tags: string;
  author: string;
  price: string;
  manufacturer: string;
  status: string;
  is_active: string;
  shop_id: string;
  min_price: string;
  max_price: string;
  rating: string;
  question: string;
  notice: string;
  faq_type: string;
  issued_by: string;
  title: string;
  target: string;
  shops: string;
}

export interface QueryOptions {
  language: string;
  page?: number;
  limit?: number;
}

export interface RefundPolicyQueryOptions extends QueryOptions {
  title: string;
  target: 'vendor' | 'customer';
  status: 'approved' | 'pending';
  orderBy: string;
  sortedBy: string;
}

export interface PaginatorInfo<T> {
  current_page: number;
  data: T[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: any[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}

export interface Attachment {
  id: number;
  original: string;
  thumbnail: string;
  __typename?: string;
  slug?: string;
}

export interface ProductQueryOptions extends QueryOptions {
  shop_id: string;
  sortedBy: string;
  orderBy: string;
  name: string;
  categories: string;
  tags: string;
  type: string;
  manufacturer: string;
  author: string;
  price: string;
  min_price: string;
  max_price: string;
  language: string;
  searchType: string;
  searchQuery: string;
  text: string;
}

export interface PopularProductQueryOptions extends QueryOptions {
  language: string;
  type_slug: string;
  with: string;
  range: number;
}

export interface BestSellingProductQueryOptions extends QueryOptions {
  language: string;
  type_slug: string;
  with: string;
  range: number;
}

import { API_ENDPOINTS } from '../api_endpoints';
import { HttpClient } from '../http-client';
import { ClothingProduct, ClothingProductQueryOptions } from '../clothing';
import { IQueryResultInfo } from '../../types';
import {
  MarketplaceProduct,
  MarketplaceProductQueryOptions,
} from '../marketplace';

class Client {
  products = {
    all: (params: Partial<ClothingProductQueryOptions>) =>
      HttpClient.get<IQueryResultInfo<ClothingProduct>>(
        API_ENDPOINTS.CLOTHING,
        params
      ),
  };
  marketplace_products = {
    all: (params: Partial<MarketplaceProductQueryOptions>) =>
      HttpClient.get<IQueryResultInfo<MarketplaceProduct>>(
        API_ENDPOINTS.MARKETPLACE,
        params
      ),

    findOne: (id: number | string) =>
      HttpClient.get<MarketplaceProduct>(API_ENDPOINTS.MARKETPLACE + `/${id}`),
  };
}

const client = new Client();

export default client;

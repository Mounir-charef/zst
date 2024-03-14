import { API_ENDPOINTS } from '../api_endpoints';
import { HttpClient } from '../http-client';
import { PaginatorInfo } from '../../types';
import { ClothingProduct } from '../../app/[locale]/clothing/(components)/ClothesProductCard';
import { ClothingProductQueryOptions } from '../clothing';

class Client {
  products = {
    all: (params: Partial<ClothingProductQueryOptions>) =>
      HttpClient.get<PaginatorInfo<ClothingProduct>>(
        API_ENDPOINTS.CLOTHING,
        params
      ),
  };
}

const client = new Client();

export default client;

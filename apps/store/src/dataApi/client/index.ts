import { API_ENDPOINTS } from '../api_endpoints';
import { HttpClient } from '../http-client';
import { ClothingProduct, ClothingProductQueryOptions } from '../clothing';
import { IQueryResultInfo } from '../../types';

class Client {
  products = {
    all: (params: Partial<ClothingProductQueryOptions>) =>
      HttpClient.get<IQueryResultInfo<ClothingProduct>>(
        API_ENDPOINTS.CLOTHING,
        params
      ),
  };
}

const client = new Client();

export default client;

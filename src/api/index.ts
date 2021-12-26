import axios from 'axios';
import { apiErrorOccured } from '../state/actions';
import { store } from '../state/store';

const client = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000',
  timeout: 30000,
  headers: {
    'x-api-key': process.env.REACT_APP_API_KEY || '',
  },
});

class API {
  private static getMethodWrapper = (
    path: string,
    params: CatAPIRequest | void
  ): Promise<CatAPIResponse> => {
    return client
      .get(path, { params: params })
      .then((response) => {
        const paginationCount = parseInt(
          response.headers['pagination-count'],
          10
        );

        return {
          data: response.data,
          total_items: paginationCount,
        };
      })
      .catch((fetchError) => {
        store.dispatch(apiErrorOccured(fetchError.message));
        return { data: null, total_items: 0, error: fetchError.message };
      });
  };

  static getBreeds = (
    params?: GetAllBreedsRequest
  ): Promise<GetAllBreedsResponse> => {
    return this.getMethodWrapper('/breeds', params);
  };

  static getImages = (
    params?: GetImagesRequest
  ): Promise<GetImagesResponse> => {
    return this.getMethodWrapper('/images/search', params);
  };

  static getImage = (params: GetImageRequest): Promise<GetImageResponse> => {
    return this.getMethodWrapper(`/images/${params.image_id}`);
  };
}

export default API;

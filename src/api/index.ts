import axios from 'axios';
import {
  apiErrorOccured,
  apiRequestFinished,
  apiRequestInitiated,
} from '../state/actions';
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
    params: API.CatAPIRequest | void
  ): Promise<API.CatAPIResponse> => {
    store.dispatch(apiRequestInitiated());

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
      })
      .finally(() => {
        store.dispatch(apiRequestFinished());
      });
  };

  static getBreeds = (
    params?: API.GetAllBreedsRequest
  ): Promise<API.GetAllBreedsResponse> => {
    return this.getMethodWrapper('/breeds', params);
  };

  static getImages = (
    params?: API.GetImagesRequest
  ): Promise<API.GetImagesResponse> => {
    return this.getMethodWrapper('/images/search', params);
  };

  static getImage = (
    params: API.GetImageRequest
  ): Promise<API.GetImageResponse> => {
    return this.getMethodWrapper(`/images/${params.image_id}`);
  };
}

export default API;

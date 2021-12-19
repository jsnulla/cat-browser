import axios from 'axios';

const client = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000',
  timeout: 30000,
  headers: {
    'x-api-key': process.env.REACT_APP_API_KEY || '',
  },
});

interface APIResponse {
  data?: any;
  paginationCount?: number;
  error?: any;
}

interface APIRequest {}

interface GetBreedsRequest extends APIRequest {
  attachBreed?: number;
  page?: number;
  limit?: number;
}

interface GetImageRequest extends APIRequest {
  image_id: string;
}

interface GetImagesRequest extends APIRequest {
  size?: string;
  mime_tpyes?: string[];
  order?: string;
  limit?: number;
  page?: number;
  category_ids?: number[];
  format?: string;
  breed_id?: string;
}

class API {
  private static getMethodWrapper = async (
    path: string,
    params: APIRequest | void
  ): Promise<APIResponse> => {
    return client
      .get(path, { params: params })
      .then((res) => {
        const paginationCount = parseInt(res.headers['pagination-count'], 10);

        return {
          data: res.data,
          paginationCount: paginationCount,
          error: null,
        };
      })
      .catch((err) => {
        console.error(err.message, err.stack);
        return { data: null, error: err.message };
      });
  };

  static getBreeds = async (
    params: GetBreedsRequest | void
  ): Promise<APIResponse> => {
    return this.getMethodWrapper('/breeds', params);
  };

  static getImages = async (
    params: GetImagesRequest | void
  ): Promise<APIResponse> => {
    return this.getMethodWrapper('/images/search', params);
  };

  static getImage = async (params: GetImageRequest): Promise<APIResponse> => {
    return this.getMethodWrapper(`/images/${params.image_id}`);
  };
}

export default API;

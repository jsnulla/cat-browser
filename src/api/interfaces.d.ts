interface Breed {
  id: string;
  name: string;
  temperament: string;
  life_span: string;
  alt_names: string;
  wikipedia_url: string;
  experimental: number;
  hairless: number;
  natural: number;
  rare: number;
  rex: number;
  suppress_tail: number;
  short_legs: number;
  hypoallergenic: number;
  adaptability: number;
  affection_level: number;
  country_code: string;
  child_friendly: number;
  dog_friendly: number;
  energy_level: number;
  grooming: number;
  health_issues: number;
  intelligence: number;
  shedding_level: number;
  social_needs: number;
  stranger_friendly: number;
  vocalisation: number;
}

interface Category {
  id: number;
  name: string;
}

interface Image {
  id: string;
  url: string;
  categories: Category[];
  breeds: Breed[];
}

interface CatAPIRequest {}

interface GetAllBreedsRequest extends CatAPIRequest {
  attach_breed: number;
  page?: number;
  limit?: number;
}

interface GetImagesRequest extends CatAPIRequest {
  size?: string;
  mime_types?: string[];
  order?: string;
  limit?: number;
  page?: number;
  category_ids?: number[];
  format?: string;
  breed_id?: string;
}

interface GetImageRequest extends CatAPIRequest {
  image_id: string;
}

interface CatAPIResponse {
  data;
  total_items;
  error?: string;
}

interface GetAllBreedsResponse extends CatAPIResponse {
  data: Breed[];
  total_items: number;
}

interface GetImagesResponse extends CatAPIResponse {
  data: Image[];
  total_items: number;
}

interface GetImageResponse extends CatAPIResponse {
  data: Image;
}

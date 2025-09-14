import { AxiosRequestConfig } from 'axios';
import { axiosInstance } from './index';

type Category = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  rank: number;
  image: CategoryImage;
};

type CategoryImage = {
  id: string;
  name: string;
  url: string;
};

type CategoryResponse = {
  data: Category[];
};

export const getCategories = async (): Promise<CategoryResponse> => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: '/getCategories',
    responseType: 'json',
  };

  const response = await axiosInstance.request<CategoryResponse>(config);
  return response.data;
};

import { AxiosRequestConfig } from 'axios';
import { axiosInstance } from './index';

type Question = {
  id: string;
  title: string;
  subtitle: string;
  image_uri: string;
  uri: string;
  order: number;
};
type QuestionResponse = Question[];

export const getQuestions = async (): Promise<QuestionResponse> => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: '/getQuestions',
    responseType: 'json',
  };

  const response = await axiosInstance.request<QuestionResponse>(config);
  return response.data;
};

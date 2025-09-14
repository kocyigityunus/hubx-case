import { AxiosRequestConfig } from 'axios';
import { axiosInstance } from './index';
import { sleep } from '@/utils';

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

  // purposefully slow down the response for demo
  await sleep(5_000);

  const response = await axiosInstance.request<QuestionResponse>(config);
  return response.data;
};

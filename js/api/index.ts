import axios from 'axios';
import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

export const axiosInstance = axios.create({
  baseURL: 'https://dummy-api-jtg6bessta-ey.a.run.app',
  timeout: 10000,
  headers: {
    'X-Platform': Platform.OS,
    'X-Bundle-Id': DeviceInfo.getBundleId(),
    'X-App-Build-Number': DeviceInfo.getBuildNumber(),
    'X-App-Version': DeviceInfo.getVersion(),
    'X-System-Version': DeviceInfo.getSystemVersion(),
  },
});

axiosInstance.interceptors.request.use(request => {
  if (request.headers != null) {
    request.headers['X-Language'] = 'en'; // i18n.language ?? 'en';
  }
  return request;
});

export * from './getQuestions';
export * from './getCategories';

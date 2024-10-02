import type { AxiosRequestConfig } from 'axios';

import axios from 'axios';

import { CONFIG } from 'src/config-global';

const API_URL = `${CONFIG.site.serverUrl}/api`;

// ----------------------------------------------------------------------

const axiosInstance = axios.create({ baseURL: CONFIG.site.serverUrl });

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong!')
);

export default axiosInstance;

// ----------------------------------------------------------------------

export const fetcher = async (args: string | [string, AxiosRequestConfig]) => {
  try {
    const [url, config] = Array.isArray(args) ? args : [args];

    const res = await axiosInstance.get(url, { ...config });

    return res.data;
  } catch (error) {
    console.error('Failed to fetch:', error);
    throw error;
  }
};

// ----------------------------------------------------------------------

export const endpoints = {
  auth: {
    me: '/api/auth/me',
    signIn: `${API_URL}/auth/login`,
    signUp: '/api/auth/sign-up',
  },
  mail: {
    send: '/api/email/send',
  },

  product: {
    list: `${API_URL}/product`,
    details: `${API_URL}/product`,
    search: `${API_URL}/product`,
  },
  category: {
    list: `${API_URL}/category`,
  },
  file: {
    default: `${API_URL}/upload`,
    productThumbnail: `${API_URL}/upload/product-thumbnail`,
    link3d: `${API_URL}/upload/product-link3d`,
    productImages: `${API_URL}/upload/product-images`,
  },
};

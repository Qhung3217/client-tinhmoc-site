import type { IProductItem, IProductListItem } from 'src/types/product';

import useSWR from 'swr';
import { useMemo } from 'react';

import axiosInstance, { fetcher, endpoints } from 'src/utils/axios';

// ----------------------------------------------------------------------

const swrOptions = {
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
};

// ----------------------------------------------------------------------

type ProductData = {
  product: IProductItem;
};

export function useGetProduct(slug: string) {
  const url = slug ? `${endpoints.product.details}/${slug}` : '';

  const { data, isLoading, error, isValidating } = useSWR<ProductData>(url, fetcher, swrOptions);

  const memoizedValue = useMemo(
    () => ({
      product: data?.product,
      productLoading: isLoading,
      productError: error,
      productValidating: isValidating,
    }),
    [data?.product, error, isLoading, isValidating]
  );

  return memoizedValue;
}

// ----------------------------------------------------------------------

type SearchResultsData = {
  results: IProductItem[];
};

export function useSearchProducts(query: string) {
  const url = query ? [endpoints.product.search, { params: { query } }] : '';

  const { data, isLoading, error, isValidating } = useSWR<SearchResultsData>(url, fetcher, {
    ...swrOptions,
    keepPreviousData: true,
  });

  const memoizedValue = useMemo(
    () => ({
      searchResults: data?.results || [],
      searchLoading: isLoading,
      searchError: error,
      searchValidating: isValidating,
      searchEmpty: !isLoading && !data?.results.length,
    }),
    [data?.results, error, isLoading, isValidating]
  );

  return memoizedValue;
}

// ----------------------------------------------------------------------

type ProductsData = {
  products: IProductListItem[];
};

export function useGetProducts() {
  const url = endpoints.product.list;

  const { data, isLoading, error, isValidating } = useSWR<ProductsData>(
    `${url}?pageSize=500`,
    fetcher,
    swrOptions
  );

  const memoizedValue = useMemo(
    () => ({
      products: data?.products || [],
      productsLoading: isLoading,
      productsError: error,
      productsValidating: isValidating,
      productsEmpty: !isLoading && !data?.products.length,
    }),
    [data?.products, error, isLoading, isValidating]
  );

  return memoizedValue;
}

//------------------------------------------------------------------------

export const addProduct = async (data: any) => {
  const url = endpoints.product.list;

  const response = await axiosInstance.post(url, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.data;
};

//------------------------------------------------------------------------

export const updateProduct = async (id: string, data: any) => {
  const url = endpoints.product.list;

  const response = await axiosInstance.put(`${url}/${id}`, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.data;
};

//------------------------------------------------------------------------

export const uploadProductThumbnail = async (id: string, image: File | string): Promise<string> => {
  if (typeof image === 'string') return image;

  const formData = new FormData();
  formData.append('file', image);
  formData.append('id', id);

  const response = await axiosInstance.post(endpoints.file.productThumbnail, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};

//------------------------------------------------------------------------

export const uploadProductImages = async (
  id: string,
  images: File[] | string[]
): Promise<string> => {
  const formData = new FormData();

  formData.append('id', id);

  if (Array.isArray(images)) {
    images.forEach((image) => {
      if (typeof image !== 'string') formData.append('files', image);
    });
  } else if (typeof images !== 'string') formData.append('files', images);

  const response = await axiosInstance.post(endpoints.file.productImages, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};

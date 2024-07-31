import type { IProductItem, IProductListItem } from 'src/types/product';

import useSWR from 'swr';
import { useMemo } from 'react';

import axiosInstance, { fetcher, endpoints } from 'src/utils/axios';

// ----------------------------------------------------------------------

const swrOptions = {
  revalidateIfStale: true,
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

export function useSearchProducts(search: string | null) {
  const url = search
    ? [
        endpoints.product.list,
        {
          params: {
            pageSize: 10,
            page: 1,
            search,
          },
        },
      ]
    : null;

  const { data, isLoading, error, isValidating, mutate } = useSWR<ProductsData>(
    url,
    fetcher,
    swrOptions
  );

  const memoizedValue = useMemo(
    () => ({
      data: data || { products: [], paginate: { totalCount: 0, pageCount: 0, currentPage: 0 } },
      productsLoading: isLoading,
      productsError: error,
      productsValidating: isValidating,
      productsEmpty: !isLoading && !data?.products.length,
      productsMutate: mutate,
    }),
    [data, error, isLoading, isValidating, mutate]
  );

  return memoizedValue;
}

// ----------------------------------------------------------------------

type ProductsData = {
  products: IProductListItem[];
  paginate: {
    totalCount: number;
    pageCount: number;
    currentPage: number;
  };
};

export function useGetProducts(
  pageSize?: number,
  currentPage?: number,
  search?: string,
  categories?: string[],
  sort?: string
) {
  const url = [
    endpoints.product.list,
    {
      params: {
        pageSize,
        page: currentPage ? currentPage + 1 : 1,
        search,
        categories: categories?.filter((c) => !!c),
        sort,
      },
    },
  ];

  const { data, isLoading, error, isValidating, mutate } = useSWR<ProductsData>(
    url,
    fetcher,
    swrOptions
  );

  const memoizedValue = useMemo(
    () => ({
      data: data || { products: [], paginate: { totalCount: 0, pageCount: 0, currentPage: 0 } },
      productsLoading: isLoading,
      productsError: error,
      productsValidating: isValidating,
      productsEmpty: !isLoading && !data?.products.length,
      productsMutate: mutate,
    }),
    [data, error, isLoading, isValidating, mutate]
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

export const deleteProduct = async (id: string) => {
  const url = endpoints.product.list;

  const response = await axiosInstance.delete(`${url}/${id}`, {
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
  images: File[],
  oldUrl: string[]
): Promise<string> => {
  const formData = new FormData();

  formData.append('id', id);

  if (Array.isArray(images)) {
    images.forEach((image) => {
      formData.append('files', image);
    });
  } else formData.append('files', images);

  if (Array.isArray(oldUrl)) {
    oldUrl.forEach((url) => {
      formData.append('oldUrl', url);
    });
  } else formData.append('oldUrl', oldUrl);

  const response = await axiosInstance.post(endpoints.file.productImages, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};

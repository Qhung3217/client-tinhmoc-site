import type { ICategoryItem } from 'src/types/category';

import useSWR from 'swr';
import { useMemo } from 'react';

import axiosInstance, { fetcher, endpoints } from 'src/utils/axios';

type CategoriesData = {
  categories: ICategoryItem[];
};

const swrOptions = {
  revalidateIfStale: true,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
};

export function useGetCategories() {
  const url = endpoints.category.list;

  const { data, isLoading, error, isValidating, mutate } = useSWR<CategoriesData>(
    url,
    fetcher,
    swrOptions
  );

  const memoizedValue = useMemo(
    () => ({
      categories: data?.categories || [],
      categoriesLoading: isLoading,
      categoriesError: error,
      categoriesValidating: isValidating,
      categoriesEmpty: !isLoading && !data?.categories.length,
      categoiresMutate: mutate,
    }),
    [data?.categories, error, isLoading, isValidating, mutate]
  );

  return memoizedValue;
}

// ----------------------------------------------------------------------

type CategoryData = {
  category: ICategoryItem;
};

export function useGetCategory(name: string) {
  const url = name ? `${endpoints.category.list}/${name}` : '';

  const { data, isLoading, error, isValidating } = useSWR<CategoryData>(url, fetcher, swrOptions);

  const memoizedValue = useMemo(
    () => ({
      category: data?.category,
      categoryLoading: isLoading,
      categoryError: error,
      categoryValidating: isValidating,
    }),
    [data?.category, error, isLoading, isValidating]
  );

  return memoizedValue;
}

//------------------------------------------------------------------------

export const addCategory = async (data: any) => {
  const url = endpoints.category.list;

  const response = await axiosInstance.post(url, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.data;
};

//------------------------------------------------------------------------

export const updateCategory = async (id: string, data: any) => {
  const url = endpoints.category.list;

  const response = await axiosInstance.put(`${url}/${id}`, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.data;
};

//------------------------------------------------------------------------

export const deleteCategory = async (id: string) => {
  const url = endpoints.category.list;

  const response = await axiosInstance.delete(`${url}/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.data;
};

//------------------------------------------------------------------------

type CategoriesCountData = {
  categories: {
    id: string;
    name: string;
    level: number;
    count: number;
  }[];
};

export function useGetCategoriesCount() {
  const url = `${endpoints.category.list}/category-count`;

  const { data, isLoading, error, isValidating } = useSWR<CategoriesCountData>(
    url,
    fetcher,
    swrOptions
  );

  const memoizedValue = useMemo(
    () => ({
      categories: data?.categories || [],
      categoriesLoading: isLoading,
      categoriesError: error,
      categoriesValidating: isValidating,
      categoriesEmpty: !isLoading && !data?.categories.length,
    }),
    [data?.categories, error, isLoading, isValidating]
  );

  return memoizedValue;
}

import type { ICategoryItem } from 'src/types/product';

import useSWR from 'swr';
import { useMemo } from 'react';

import { fetcher, endpoints } from 'src/utils/axios';

type CategoriesData = {
  categories: ICategoryItem[];
};

const swrOptions = {
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
};

export function useGetCategories() {
  const url = endpoints.category.list;

  const { data, isLoading, error, isValidating } = useSWR<CategoriesData>(url, fetcher, swrOptions);

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

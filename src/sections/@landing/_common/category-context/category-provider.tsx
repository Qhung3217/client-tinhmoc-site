import React, { useMemo } from 'react';

import { useGetCategories, useGetCategoriesCount } from 'src/actions/category';

import { CategoryContext } from './category-context';

import type { CategoryContextValue } from './type';

type Props = {
  children: React.ReactNode;
};
export default function CategoryProvider({ children }: Props) {
  const { categories, categoriesLoading, categoriesError, categoriesEmpty } = useGetCategories();
  const {
    categories: countList,
    categoriesLoading: countLoading,
    categoriesEmpty: countEmpty,
    categoriesError: countError,
  } = useGetCategoriesCount();

  const memoizedValue = useMemo<CategoryContextValue>(
    () => ({
      categoryList: {
        list: categories,
        empty: categoriesEmpty,
        error: categoriesError,
        loading: categoriesLoading,
      },
      categoryCountData: {
        list: countList,
        empty: countEmpty,
        error: countError,
        loading: countLoading,
      },
    }),
    [
      categories,
      categoriesLoading,
      categoriesError,
      categoriesEmpty,
      countList,
      countLoading,
      countEmpty,
      countError,
    ]
  );

  return <CategoryContext.Provider value={memoizedValue}>{children}</CategoryContext.Provider>;
}

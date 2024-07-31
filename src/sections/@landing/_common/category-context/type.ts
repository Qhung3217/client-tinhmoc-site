import type { ICategoryItem, ICategoryCountItem } from 'src/types/category';

export type CategoryContextValue = {
  categoryList: { list: ICategoryItem[]; loading: boolean; error: boolean; empty: boolean };
  categoryCountData: {
    list: ICategoryCountItem[];
    loading: boolean;
    error: boolean;
    empty: boolean;
  };
};

import { useContext } from 'react';

import { CategoryContext } from './category-context';

export default function useCategoryContext() {
  const context = useContext(CategoryContext);

  if (!context) {
    throw new Error('useCategoryContext: Context must be used inside CategoryContext');
  }

  return context;
}

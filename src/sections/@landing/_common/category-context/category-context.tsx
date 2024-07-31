import { createContext } from 'react';

import type { CategoryContextValue } from './type';

// ----------------------------------------------------------------------

export const CategoryContext = createContext<CategoryContextValue | undefined>(undefined);

export const CategoryConsumer = CategoryContext.Consumer;

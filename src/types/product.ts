import type { IDateValue } from './common';

// ----------------------------------------------------------------------

export type IProductFilters = {
  category: string | null;
  sort: string;
};

export type IProductFilterOptions = {
  category: {
    value: string;
    label: string;
  }[];
};

export type IProductFilterOptionItem = {
  title: string;
  children: string[];
};

export type IProductTableFilters = {
  categories: string[];
};

export type IProductReviewNewForm = {
  rating: number | null;
  review: string;
  name: string;
  email: string;
};

export type IProductReview = {
  id: string;
  name: string;
  rating: number;
  comment: string;
  helpful: number;
  avatarUrl: string;
  postedAt: IDateValue;
  isPurchased: boolean;
  attachments?: string[];
};

export type IProductItem = {
  id: string;
  slug: string;
  title: string;
  normalizeTitle: string;
  content: string;
  thumbnail: string;
  subContent: string;
  link3d: string;
  price: string;
  salePercent: number;
  priority: number;
  categoryId: string;
  createId: string;
  updateId: string;
  createdAt: string;
  updatedAt: string;
  isDeleted: boolean;
  images: string[];
  category: {
    id: string;
    name: string;
  };
  createBy: {
    email: string;
  };
  updateBy: {
    email: string;
  };
};

export type IProductListItem = {
  id: string;
  slug: string;
  title: string;
  thumbnail: string;
  subContent: string;
  price: string;
  salePercent: number;
  priority: number;
  createdAt: string;
  updatedAt: string;
  category: {
    name: string;
  };
  createBy: {
    email: string;
  };
};

export const PRODUCT_SORT_OPTIONS = [
  { value: 'do-uu-tien', label: 'Độ ưu tiên' },
  { value: 'moi-nhat', label: 'Mới nhất' },
  { value: 'gia-cao-nhat', label: 'Giá cao nhất' },
  { value: 'gia-thap-nhat', label: 'Giá thấp nhất ' },
];

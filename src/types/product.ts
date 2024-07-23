import type { IDateValue } from './common';

// ----------------------------------------------------------------------

export type IProductFilters = {
  rating: string;
  gender: string[];
  category: string;
  colors: string[];
  priceRange: number[];
};

export type IProductTableFilters = {
  title: string[];
  createBy: string[];
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

export type ICategoryItem = {
  id: string;
  name: string;
  parentId?: string;
  isDeleted: boolean;
  createId: string;
  updateId: string;
  createdAt: Date;
  updatedAt: Date;
  categories: {
    id: string;
    name: string;
    parentId: string;
    isDeleted: boolean;
    createId: string;
    updateId: string;
    createdAt: Date;
    updatedAt: Date;
  }[];
};

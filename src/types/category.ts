export type ICategoryItem = {
  id: string;
  name: string;
  parentId?: string;
  isDeleted: boolean;
  createId: string;
  updateId: string;
  createdAt: Date;
  updatedAt: Date;
  categories: ICategoryItem[];
  createBy: {
    email: string;
  };
};

export type ICategoryCountItem = {
  id: string;
  name: string;
  level: number;
  count: number;
};

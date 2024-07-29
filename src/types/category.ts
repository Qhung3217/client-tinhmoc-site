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

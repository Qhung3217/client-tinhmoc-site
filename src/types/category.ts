export type ICategoryItem = {
  id: string;
  name: string;
  isDeleted: boolean;
  createId: string;
  updateId: string;
  createdAt: Date;
  updatedAt: Date;
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

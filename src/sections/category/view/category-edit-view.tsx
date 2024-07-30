import type { ICategoryItem } from 'src/types/category';

import { paths } from 'src/routes/paths';

import { DashboardContent } from 'src/layouts/dashboard';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { CategoryNewEditForm } from '../category-new-edit-form';

// ----------------------------------------------------------------------

type Props = {
  category?: ICategoryItem;
};

export function CategoryEditView({ category }: Props) {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Chỉnh sửa loại sản phẩm"
        links={[
          { name: 'Quản trị', href: paths.dashboard.root },
          { name: 'Loại sản phẩm', href: paths.dashboard.product.root },
          { name: category?.name },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <CategoryNewEditForm currentCategory={category} />
    </DashboardContent>
  );
}

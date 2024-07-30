import { paths } from 'src/routes/paths';

import { DashboardContent } from 'src/layouts/dashboard';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { CategoryNewEditForm } from '../category-new-edit-form';

// ----------------------------------------------------------------------

export function CategoryCreateView() {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Thêm loại sản phẩm"
        links={[
          { name: 'Quản trị', href: paths.dashboard.root },
          { name: 'Loại sản phẩm', href: paths.dashboard.category.root },
          { name: 'Thêm loại sản phẩm' },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <CategoryNewEditForm />
    </DashboardContent>
  );
}

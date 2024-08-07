import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config-global';

import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor src={`${CONFIG.site.basePath}/assets/icons/navbar/${name}.svg`} />
);

const ICONS = {
  product: icon('ic-product'),

  dashboard: icon('ic-dashboard'),
};

// ----------------------------------------------------------------------

export const navData = [
  /**
   * Overview
   */
  {
    subheader: 'Overview',
    items: [{ title: 'Tổng quan', path: paths.dashboard.root, icon: ICONS.dashboard }],
  },
  /**
   * Management
   */
  {
    subheader: 'Management',
    items: [
      {
        title: 'Sản Phẩm',
        path: paths.dashboard.product.root,
        icon: ICONS.product,
        children: [
          { title: 'Danh sách', path: paths.dashboard.product.root },
          // { title: 'Chi tiết', path: paths.dashboard.product.demo.details },
          { title: 'Tạo mới', path: paths.dashboard.product.new },
          // { title: 'Chỉnh sửa', path: paths.dashboard.product.demo.edit },
        ],
      },
      {
        title: 'Loại Sản Phẩm',
        path: paths.dashboard.category.root,
        icon: ICONS.product,
        children: [
          { title: 'Danh sách', path: paths.dashboard.category.root },
          // { title: 'Chi tiết', path: paths.dashboard.product.demo.details },
          { title: 'Tạo mới', path: paths.dashboard.category.new },
          // { title: 'Chỉnh sửa', path: paths.dashboard.product.demo.edit },
        ],
      },
    ],
  },
];

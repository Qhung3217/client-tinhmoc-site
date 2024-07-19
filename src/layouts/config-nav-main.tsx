import { paths } from 'src/routes/paths';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export const navData = [
  { title: 'Trang chủ', path: '/', icon: <Iconify width={22} icon="solar:home-2-bold-duotone" /> },
  {
    title: 'Sản phẩm',
    path: paths.landing.product.root,
    icon: <Iconify width={22} icon="solar:atom-bold-duotone" />,
  },


];

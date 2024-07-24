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
export const NAV_ITEMS = [
  {
    title: 'Home',
    path: '#',
  },
  {
    title: 'Page',
    path: '/basic/page',
    caption: 'This is the caption',
    children: [
      {
        title: 'Page 1',
        path: '/basic/page/1',
        caption: 'This is the caption',
        info: '+3',
        children: [
          { title: 'Page 1.1', path: '/basic/page/1/1' },
          { title: 'Page 1.2', path: '/basic/page/1/2' },
        ],
      },
      {
        title: 'Page 2',
        path: '/basic/page/2',
        children: [
          { title: 'Page 2.1', path: '/basic/page/2/1' },
          { title: 'Page 2.2', path: '/basic/page/2/2' },
          {
            title: 'Page 2.3',
            path: '/basic/page/2/3',
            children: [
              { title: 'Page 2.3.1', path: '/basic/page/2/3/1' },
              { title: 'Page 2.3.2', path: '/basic/page/2/3/2' },
              { title: 'Page 2.3.3', path: '/basic/page/2/3/3' },
            ],
          },
        ],
      },
      {
        title: 'Page 3',
        path: '#',
      },
    ],
  },
];

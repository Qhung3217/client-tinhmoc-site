import { type NavSectionDataProps } from 'src/components/nav-section';

import type { NavItemBaseProps } from './main/nav/types';

// ----------------------------------------------------------------------

export const navData: NavItemBaseProps[] = [
  { title: 'Trang chủ', path: '/' },
  {
    title: 'Cửa gỗ',
    path: '/basic/page',
    children: [
      {
        subheader: '',
        items: [
          {
            title: 'Cửa gỗ HDF sơn',
            path: '/basic/page/1',
          },
          {
            title: 'Cửa gỗ HDF venneer',
            path: '/basic/page/1',
          },
          {
            title: 'Cửa vòm gỗ',
            path: '/basic/page/1',
          },
        ],
      },
    ],
  },
  {
    title: 'Cửa nhựa',
    path: '/basic/page',
    children: [
      {
        subheader: '',
        items: [
          {
            title: 'Cửa gỗ HDF sơn',
            path: '/basic/page/1',
          },
          {
            title: 'Cửa gỗ HDF venneer',
            path: '/basic/page/1',
          },
          {
            title: 'Cửa vòm gỗ',
            path: '/basic/page/1',
          },
        ],
      },
    ],
  },
  {
    title: 'Cửa thép vân gỗ',
    path: '/basic/page',
    children: [
      {
        subheader: '',
        items: [
          {
            title: 'Cửa gỗ HDF sơn',
            path: '/basic/page/1',
          },
          {
            title: 'Cửa gỗ HDF venneer',
            path: '/basic/page/1',
          },
          {
            title: 'Cửa vòm gỗ',
            path: '/basic/page/1',
          },
        ],
      },
    ],
  },
  {
    title: 'Bàn ghế',
    path: '/basic/page',
    children: [
      {
        subheader: '',
        items: [
          {
            title: 'Cửa gỗ HDF sơn',
            path: '/basic/page/1',
          },
          {
            title: 'Cửa gỗ HDF venneer',
            path: '/basic/page/1',
          },
          {
            title: 'Cửa vòm gỗ',
            path: '/basic/page/1',
          },
        ],
      },
    ],
  },
];
export const NAV_ITEMS: NavSectionDataProps = [
  {
    items: [
      {
        title: 'Trang chủ',
        path: '/',
      },
    ],
  },
  {
    items: [
      {
        title: 'Cửa gỗ',
        path: '/basic/page',
        children: [
          {
            title: 'Cửa gỗ HDF sơn',
            path: '/basic/page/1',
          },
          {
            title: 'Cửa gỗ HDF venneer',
            path: '/basic/page/1',
          },
          {
            title: 'Cửa vòm gỗ',
            path: '/basic/page/1',
          },
        ],
      },
    ],
  },
  {
    items: [
      {
        title: 'Cửa nhựa',
        path: '/basic/page',
        children: [
          {
            title: 'Cửa gỗ HDF sơn',
            path: '/basic/page/1',
          },
          {
            title: 'Cửa gỗ HDF venneer',
            path: '/basic/page/1',
          },
          {
            title: 'Cửa vòm gỗ',
            path: '/basic/page/1',
          },
        ],
      },
    ],
  },
  {
    items: [
      {
        title: 'Cửa thép vân gỗ',
        path: '/basic/page',
        children: [
          {
            title: 'Cửa gỗ HDF sơn',
            path: '/basic/page/1',
          },
          {
            title: 'Cửa gỗ HDF venneer',
            path: '/basic/page/1',
          },
          {
            title: 'Cửa vòm gỗ',
            path: '/basic/page/1',
          },
        ],
      },
    ],
  },
  {
    items: [
      {
        title: 'Cửa chống cháy',
        path: '/basic/page',
        children: [
          {
            title: 'Cửa gỗ HDF sơn',
            path: '/basic/page/1',
          },
          {
            title: 'Cửa gỗ HDF venneer',
            path: '/basic/page/1',
          },
          {
            title: 'Cửa vòm gỗ',
            path: '/basic/page/1',
          },
        ],
      },
    ],
  },
  {
    items: [
      {
        title: 'Bàn ghế',
        path: '/basic/page',
        children: [
          {
            title: 'Cửa gỗ HDF sơn',
            path: '/basic/page/1',
          },
          {
            title: 'Cửa gỗ HDF venneer',
            path: '/basic/page/1',
          },
          {
            title: 'Cửa vòm gỗ',
            path: '/basic/page/1',
          },
        ],
      },
    ],
  },
];

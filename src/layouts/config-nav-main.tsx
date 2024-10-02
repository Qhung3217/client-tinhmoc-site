import { type NavSectionDataProps } from 'src/components/nav-section';

import type { NavItemBaseProps } from './main/nav/types';

// ----------------------------------------------------------------------

export const navData: NavItemBaseProps[] = [
  { title: 'Trang chủ', path: '/' },
  {
    title: 'Cửa',
    path: '/cua',
  },
  {
    title: 'Bàn ghế',
    path: '/ban-ghe',
  },
  {
    title: 'Kệ',
    path: '/ke',
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
        title: 'Cửa',
        path: '/cua',
      },
    ],
  },
  {
    items: [
      {
        title: 'Bàn ghế',
        path: '/ban-ghe',
      },
    ],
  },
  {
    items: [
      {
        title: 'Kệ',
        path: '/ke',
      },
    ],
  },
];

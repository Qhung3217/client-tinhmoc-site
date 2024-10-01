import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { MainLayout } from 'src/layouts/main';
import { SimpleLayout } from 'src/layouts/simple';

import { SplashScreen } from 'src/components/loading-screen';

import { CategoryProvider } from 'src/sections/@landing/_common/category-context';

// ----------------------------------------------------------------------

const ComingSoonPage = lazy(() => import('src/pages/coming-soon'));
// Product
const ProductListPage = lazy(() => import('src/pages/san-pham/list'));
const ProductDetailPage = lazy(() => import('src/pages/san-pham/details'));
const DoorPage = lazy(() => import('src/pages/chi-tiet/cua'));
const TablePage = lazy(() => import('src/pages/chi-tiet/ban-ghe'));
const ShelfPage = lazy(() => import('src/pages/chi-tiet/ke'));
// Error
const Page500 = lazy(() => import('src/pages/error/500'));
const Page403 = lazy(() => import('src/pages/error/403'));
const Page404 = lazy(() => import('src/pages/error/404'));

// ----------------------------------------------------------------------

export const mainRoutes = [
  {
    element: (
      <Suspense fallback={<SplashScreen />}>
        <CategoryProvider>
          <Outlet />
        </CategoryProvider>
      </Suspense>
    ),
    children: [
      {
        element: (
          <MainLayout>
            <Outlet />
          </MainLayout>
        ),
        children: [
          {
            path: '/cua',
            element: <DoorPage />,
          },
          {
            path: '/ban-ghe',
            element: <TablePage />,
          },
          {
            path: '/ke',
            element: <ShelfPage />,
          },
          {
            path: 'san-pham',
            children: [
              { element: <ProductListPage />, index: true },
              { path: 'list', element: <ProductListPage /> },
              { path: ':slug', element: <ProductDetailPage /> },
            ],
          },
        ],
      },

      {
        path: 'coming-soon',
        element: (
          <SimpleLayout content={{ compact: true }}>
            <ComingSoonPage />
          </SimpleLayout>
        ),
      },

      { path: '500', element: <Page500 /> },
      { path: '404', element: <Page404 /> },
      { path: '403', element: <Page403 /> },
    ],
  },
];

import { lazy, Suspense } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

import { CONFIG } from 'src/config-global';
import { DashboardLayout } from 'src/layouts/dashboard';

import { LoadingScreen } from 'src/components/loading-screen';

import { AuthGuard } from 'src/auth/guard';

import { paths } from '../paths';

// ----------------------------------------------------------------------

// Overview
const IndexPage = lazy(() => import('src/pages/dashboard') as any);
// Product
const ProductDetailsPage = lazy(() => import('src/pages/dashboard/product/details'));
const ProductListPage = lazy(() => import('src/pages/dashboard/product/list'));
const ProductCreatePage = lazy(() => import('src/pages/dashboard/product/new'));
const ProductEditPage = lazy(() => import('src/pages/dashboard/product/edit'));
// Category
const CategoryDetailsPage = lazy(() => import('src/pages/dashboard/category/details'));
const CategoryListPage = lazy(() => import('src/pages/dashboard/category/list'));
const CategoryCreatePage = lazy(() => import('src/pages/dashboard/category/new'));
const CategoryEditPage = lazy(() => import('src/pages/dashboard/category/edit'));

// ----------------------------------------------------------------------

const layoutContent = (
  <DashboardLayout>
    <Suspense fallback={<LoadingScreen />}>
      <Outlet />
    </Suspense>
  </DashboardLayout>
);

export const dashboardRoutes = [
  {
    path: 'quan-tri',
    element: CONFIG.auth.skip ? <>{layoutContent}</> : <AuthGuard>{layoutContent}</AuthGuard>,
    children: [
      { element: <Navigate to={paths.dashboard.product.root} replace />, index: true },

      {
        path: 'san-pham',
        children: [
          { element: <ProductListPage />, index: true },
          { path: 'danh-sach', element: <ProductListPage /> },
          // { path: ':id', element: <ProductDetailsPage /> },
          // { path: 'tao-moi', element: <ProductCreatePage /> },
          { path: ':id/chinh-sua', element: <ProductEditPage /> },
        ],
      },
      // {
      //   path: 'loai-san-pham',
      //   children: [
      //     { element: <CategoryListPage />, index: true },
      //     { path: 'danh-sach', element: <CategoryListPage /> },
      //     { path: ':id', element: <CategoryDetailsPage /> },
      //     { path: 'tao-moi', element: <CategoryCreatePage /> },
      //     { path: ':id/chinh-sua', element: <CategoryEditPage /> },
      //   ],
      // },
    ],
  },
];

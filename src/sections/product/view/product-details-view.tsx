import type { IProductItem } from 'src/types/product';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { DashboardContent } from 'src/layouts/dashboard';

import { Iconify } from 'src/components/iconify';
import { EmptyContent } from 'src/components/empty-content';

import { ProductDetailsSkeleton } from '../product-skeleton';
// import { ProductDetailsSummary } from '../product-details-summary';
import { ProductDetailsSummary } from '../product-details-summary';
import { ProductDetailsToolbar } from '../product-details-toolbar';
import { ProductDetailsCarousel } from '../product-details-carousel';

// ----------------------------------------------------------------------

type Props = {
  product?: IProductItem;
  loading?: boolean;
  error?: any;
};

export function ProductDetailsView({ product, error, loading }: Props) {
  if (loading) {
    return (
      <DashboardContent sx={{ pt: 5 }}>
        <ProductDetailsSkeleton />
      </DashboardContent>
    );
  }

  if (error) {
    return (
      <DashboardContent sx={{ pt: 5 }}>
        <EmptyContent
          filled
          title="Sản phẩm không tồn tại!"
          action={
            <Button
              component={RouterLink}
              href={paths.dashboard.product.root}
              startIcon={<Iconify width={16} icon="eva:arrow-ios-back-fill" />}
              sx={{ mt: 3 }}
            >
              Quay lại
            </Button>
          }
          sx={{ py: 10, height: 'auto', flexGrow: 'unset' }}
        />
      </DashboardContent>
    );
  }

  return (
    <DashboardContent>
      <ProductDetailsToolbar
        backLink={paths.dashboard.product.root}
        editLink={paths.dashboard.product.edit(`${product?.slug}`)}
      />

      <Grid container spacing={{ xs: 3, md: 5, lg: 8 }}>
        <Grid xs={12} md={6} lg={7}>
          <ProductDetailsCarousel
            images={
              product?.thumbnail ? [product.thumbnail, ...product.images] : product?.images ?? []
            }
          />
        </Grid>

        <Grid xs={12} md={6} lg={5}>
          {product && <ProductDetailsSummary product={product} />}
        </Grid>
      </Grid>
    </DashboardContent>
  );
}

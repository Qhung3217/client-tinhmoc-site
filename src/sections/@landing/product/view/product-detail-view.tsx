import type { IProductItem } from 'src/types/product';

import { useMemo } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Stack, Button, CardHeader } from '@mui/material';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';
import { EmptyContent } from 'src/components/empty-content';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { ProductDetailsSkeleton } from '../product-skeleton';
import ProductRelatedCarousel from '../product-related-carousel';
import { ProductDetailsSummary } from '../product-details-summary';
import { useCategoryContext } from '../../_common/category-context';
import { ProductDetailsCarousel } from '../product-details-carousel';
import { ProductDetailsDescription } from '../product-details-description';

// ----------------------------------------------------------------------

const SUMMARY = [
  {
    title: '100% original',
    description: 'Chocolate bar candy canes ice cream toffee cookie halvah.',
    icon: 'solar:verified-check-bold',
  },
  {
    title: '10 days replacement',
    description: 'Marshmallow biscuit donut dragée fruitcake wafer.',
    icon: 'solar:clock-circle-bold',
  },
  {
    title: 'Year warranty',
    description: 'Cotton candy gingerbread cake I love sugar sweet.',
    icon: 'solar:shield-check-bold',
  },
];
type Props = {
  product?: IProductItem;
  loading?: boolean;
  error?: any;
};
export default function ProductDetailsView({ product, loading, error }: Props) {
  const {
    categoryList: { list: categories },
  } = useCategoryContext();
  const rootCategory = useMemo(
    () =>
      product?.category
        ? categories.find((c) => c.categories.find((sc) => sc.name === product.category.name))
            ?.name || ''
        : '',
    [categories, product?.category]
  );
  if (loading) {
    return (
      <Container sx={{ mt: 5, mb: 10 }}>
        <ProductDetailsSkeleton />
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ mt: 5, mb: 10 }}>
        <EmptyContent
          filled
          title="Không tìm thấy sản phẩm !"
          action={
            <Button
              component={RouterLink}
              href={paths.landing.product.root}
              startIcon={<Iconify width={16} icon="eva:arrow-ios-back-fill" />}
              sx={{ mt: 3 }}
            >
              Sản phẩm khác
            </Button>
          }
          sx={{ py: 10 }}
        />
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 5, mb: 10 }}>
      <Grid container spacing={{ xs: 3, md: 5, lg: 8 }}>
        <Grid xs={12} md={6} lg={6}>
          <ProductDetailsCarousel
            images={product?.thumbnail ? [product.thumbnail, ...product.images] : []}
            link3d={product?.link3d}
          />
        </Grid>

        <Grid xs={12} md={6} lg={6}>
          <CustomBreadcrumbs
            links={[
              { name: 'Sản phẩm', href: paths.landing.product.root },
              {
                name: product?.category?.name || 'Danh mục',
                href: paths.landing.product.subCategory(
                  rootCategory,
                  product?.category?.name || ''
                ),
              },
              { name: product?.title || 'Sản phẩm' },
            ]}
            sx={{
              mt: 1,
              '& .MuiBreadcrumbs-ol': {
                columnGap: '4px',
              },
            }}
          />
          {product && <ProductDetailsSummary product={product} />}
          <Box
            gap={1}
            gridTemplateColumns={{ md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
            sx={{
              mt: 10,
              display: {
                md: 'grid',
                xs: 'none',
              },
            }}
          >
            {SUMMARY.map((item) => (
              <Box key={item.title} sx={{ textAlign: 'left', px: 1 }}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Iconify icon={item.icon} width={32} sx={{ color: 'primary.main' }} />

                  <Typography variant="subtitle1">{item.title}</Typography>
                </Stack>

                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {item.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>

      <Box
        gap={5}
        gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
        sx={{
          mt: 10,
          display: {
            md: 'none',
            xs: 'grid',
          },
        }}
      >
        {SUMMARY.map((item) => (
          <Box key={item.title} sx={{ textAlign: 'center', px: 5 }}>
            <Iconify icon={item.icon} width={32} sx={{ color: 'primary.main' }} />

            <Typography variant="subtitle1" sx={{ mb: 1, mt: 2 }}>
              {item.title}
            </Typography>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {item.description}
            </Typography>
          </Box>
        ))}
      </Box>
      <Card sx={{ mt: 10 }}>
        <CardHeader title="Mô tả" />

        <ProductDetailsDescription description={product?.content} />
      </Card>
      <ProductRelatedCarousel category={product?.category?.name || ''} />

      {/* <Grid container spacing={3}>
        <Grid xs={12} md={8}>
          <Card sx={{ mt: 10 }}>
            <CardHeader title="Mô tả" />

            <ProductDetailsDescription description={product?.content} />
          </Card>
        </Grid>
        <Grid xs={12} md={4}>
          <ProductRelatedCarousel category={product?.category?.name || ''} />
        </Grid>
      </Grid> */}
    </Container>
  );
}

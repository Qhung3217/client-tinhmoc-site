import type { IProductItem } from 'src/types/product';

import { Button } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';
import { MuiBox } from 'src/components/@mui/mui-box';
import { EmptyContent } from 'src/components/empty-content';

import { ProductDetailsSkeleton } from '../product-skeleton';
import { ProductDetailsDescription } from '../product-details-description';

// ----------------------------------------------------------------------

type Props = {
  product?: IProductItem;
  loading?: boolean;
  error?: any;
};
export default function ProductDetailsView({ product, loading, error }: Props) {
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
          title="Không tìm thấy tin tức !"
          action={
            <Button
              component={RouterLink}
              href={paths.landing.product.root}
              startIcon={<Iconify width={16} icon="eva:arrow-ios-back-fill" />}
              sx={{ mt: 3 }}
            >
              Tin tức khác
            </Button>
          }
          sx={{ py: 10 }}
        />
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 5, mb: 10, color: 'white' }}>
      <MuiBox sx={{}}>
        <Image src={product?.thumbnail} alt={product?.title} sx={{ height: 400, width: 1 }} />
      </MuiBox>
      {/* <MuiBox>
        <CustomBreadcrumbs
          links={[
            { name: 'Sản phẩm', href: paths.landing.product.root },
            {
              name: product?.category?.name || 'Danh mục',
              href: paths.landing.product.category(product?.category?.name || ''),
            },
            { name: product?.title || 'Sản phẩm' },
          ]}
          slotProps={{
            breadcrumbs: {},
          }}
          sx={{
            mt: 1,
            '& .MuiBreadcrumbs-li a': {
              color: 'white',
            },
            '& .MuiBreadcrumbs-ol': {
              columnGap: '4px',
            },
          }}
        />
      </MuiBox> */}

      <MuiBox sx={{ py: 2 }}>
        <Typography variant="h3" textAlign="center">
          {product?.title}
        </Typography>
        <Typography>{product?.subContent}</Typography>
      </MuiBox>

      <ProductDetailsDescription description={product?.content} />

      {/* <ProductRelatedCarousel category={product?.category?.name || ''} /> */}
    </Container>
  );
}

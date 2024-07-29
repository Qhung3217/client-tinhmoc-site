import { Box, Pagination, paginationClasses } from '@mui/material';

import { useGetProducts } from 'src/actions/product';

import { EmptyContent } from 'src/components/empty-content';

import { ProductItem } from './product-item';
import { ProductItemSkeleton } from './product-skeleton';

export default function ProductList() {
  const { products, productsLoading } = useGetProducts();

  const renderLoading = <ProductItemSkeleton />;
  const renderNotFound = <EmptyContent filled sx={{ py: 10 }} />;

  const renderList = products.map((product, index) => (
    <ProductItem key={product.id} product={product} />
  ));

  return (
    <>
      <Box
        display="grid"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)',
        }}
        sx={{
          borderLeft: '1px solid rgba(255,255,255,0.2)',
          borderTop: '1px solid rgba(255,255,255,0.2)',
        }}
      >
        {productsLoading ? renderLoading : renderList}
      </Box>

      {products.length > 8 && (
        <Pagination
          count={8}
          sx={{
            mt: { xs: 5, md: 8 },
            [`& .${paginationClasses.ul}`]: { justifyContent: 'center' },
          }}
        />
      )}
    </>
  );
}

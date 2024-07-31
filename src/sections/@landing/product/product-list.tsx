import type { IProductListItem } from 'src/types/product';

import { Box, Pagination, paginationClasses } from '@mui/material';

import { ProductItem } from './product-item';
import { ProductItemSkeleton } from './product-skeleton';

type Props = {
  products: IProductListItem[];
  loading: boolean;
  totalPages: number;
  onPageChange: (page: number) => void;
  currentPage: number;
};
export default function ProductList({
  products,
  loading,
  totalPages,
  onPageChange,
  currentPage,
}: Props) {
  const renderLoading = <ProductItemSkeleton />;

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
        {loading ? renderLoading : renderList}
      </Box>

      {products.length > 0 && (
        <Pagination
          color="primary"
          size="large"
          shape="rounded"
          page={currentPage}
          count={totalPages}
          onChange={(event, newPage) => onPageChange(newPage)}
          sx={{
            mt: { xs: 5, md: 8 },
            [`& .${paginationClasses.ul}`]: { justifyContent: 'center' },
          }}
        />
      )}
    </>
  );
}

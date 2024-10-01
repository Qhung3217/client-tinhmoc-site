import type { IProductListItem } from 'src/types/product';

import { useMemo } from 'react';

import Masonry from '@mui/lab/Masonry';
import { Pagination, paginationClasses } from '@mui/material';

import { MuiBox } from 'src/components/@mui/mui-box';

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

  const renderList = useMemo(
    () => products.map((product) => <ProductItem key={product.id} product={product} />),
    [products]
  );
  // eslint-disable-next-line react/jsx-no-useless-fragment
  if (products.length === 0) return <></>;

  return (
    <>
      <MuiBox
        sx={{
          width: 1,
          maxWidth: 1,
          overflow: 'hidden',
        }}
      >
        <Masonry
          columns={{
            xs: 1,
            sm: 2,
          }}
          spacing={1}
          sequential
        >
          {loading ? renderLoading : renderList}
        </Masonry>
      </MuiBox>

      {products.length > 0 && (
        <Pagination
          color="primary"
          size="large"
          shape="rounded"
          page={currentPage}
          count={totalPages}
          onChange={(event, newPage) => {
            onPageChange(newPage);
            window.scrollTo(0, 0);
          }}
          sx={{
            '& li *': {
              color: 'white',
            },
            mt: { xs: 5, md: 8 },
            [`& .${paginationClasses.ul}`]: { justifyContent: 'center' },
          }}
        />
      )}
    </>
  );
}

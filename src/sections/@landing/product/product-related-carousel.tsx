import { Box } from '@mui/material';

import { useParams } from 'src/routes/hooks';

import { useGetProducts } from 'src/actions/product';

import { Carousel, useCarousel } from 'src/components/carousel';

import { ProductItem } from './product-item';
import { SectionTitle } from '../_common/section-title';

type Props = {
  category: string;
};
export default function ProductRelatedCarousel({ category }: Props) {
  const { slug = '' } = useParams();

  const {
    data: { products },
  } = useGetProducts(10, 0, '', [category]);
  // const mdUp = useResponsive('up', 'md');
  const carousel = useCarousel({
    slidesToShow: { xs: 1, sm: 2, md: 4, lg: 5 },
    // axis: mdUp ? 'y' : 'x',
  });
  return (
    <Box sx={{ pt: { xs: 5, md: 10 } }}>
      <SectionTitle
        sx={{
          textAlign: 'left',
          // ...(mdUp && { fontSize: 24, fontWeight: 600, lineHeight: 1.2, pl: 1 }),
        }}
      >
        Sản phẩm liên quan
      </SectionTitle>
      <Box
        component="div"
        width={1}
        sx={{
          mt: 2,
          px: 1,
        }}
      >
        <Box sx={{ mb: 2.5, position: 'relative' }} width={1}>
          <Carousel carousel={carousel}>
            {products.map((product) => {
              if (product.id === slug) return '';

              return (
                <ProductItem
                  key={product.id}
                  product={product}
                  sx={{
                    border: 'none',
                  }}
                />
              );
            })}
          </Carousel>
        </Box>
      </Box>
    </Box>
  );
}

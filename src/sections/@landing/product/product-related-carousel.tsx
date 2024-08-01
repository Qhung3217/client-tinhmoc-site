import { Box } from '@mui/material';

import { useGetProducts } from 'src/actions/product';

import { Carousel, useCarousel } from 'src/components/carousel';

import { ProductItem } from './product-item';
import { SectionTitle } from '../_common/section-title';

type Props = {
  category: string;
};
export default function ProductRelatedCarousel({ category }: Props) {
  const {
    data: { products },
  } = useGetProducts(10, 0, '', [category]);
  const carousel = useCarousel({
    slidesToShow: { xs: 1, sm: 2, md: 4, lg: 5 },
  });
  return (
    <Box sx={{ pt: { xs: 5, md: 10 } }}>
      <SectionTitle
        sx={{
          textAlign: 'left',
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
            {products.map((product) => (
              <ProductItem
                key={product.id}
                product={product}
                sx={{
                  border: 'none',
                }}
              />
            ))}
          </Carousel>
        </Box>
      </Box>
    </Box>
  );
}

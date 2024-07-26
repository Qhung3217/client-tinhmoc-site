/* eslint-disable react/no-danger */
import type { IProductItem } from 'src/types/product';

import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

type Props = {
  product: IProductItem;
};

export function ProductDetailsSummary({ product }: Props) {
  const { slug, title, content, category } = product;

  //   const renderPrice = (
  //     <Box sx={{ typography: 'h5' }}>
  //       {priceSale && (
  //         <Box
  //           component="span"
  //           sx={{ color: 'text.disabled', textDecoration: 'line-through', mr: 0.5 }}
  //         >
  //           {fCurrency(priceSale)}
  //         </Box>
  //       )}

  //       {fCurrency(price)}
  //     </Box>
  //   );

  const renderDescription = (
    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Typography>
  );

  const renderInventoryType = (
    <Box
      component="span"
      sx={{
        typography: 'overline',
        color: 'success.main',
      }}
    >
      {category.name}
    </Box>
  );

  return (
    <Stack spacing={3} sx={{ pt: 3 }}>
      <Stack spacing={2} alignItems="flex-start">
        {renderInventoryType}

        <Typography variant="h6">{slug}</Typography>

        <Typography variant="h5">{title}</Typography>

        {renderDescription}
      </Stack>

      {/* <Divider sx={{ borderStyle: 'dashed' }} /> */}
    </Stack>
  );
}

/* eslint-disable react/no-danger */
import type { IProductItem } from 'src/types/product';

import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { fCurrency } from 'src/utils/format-number';

// ----------------------------------------------------------------------

type Props = {
  product: IProductItem;
};

export function ProductDetailsSummary({ product }: Props) {
  const { slug, title, content, category, price, salePercent } = product;

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

        <Box sx={{ position: 'relative', typography: 'h5' }}>
          {salePercent !== 0 && (
            <Typography
              component="span"
              sx={{
                color: 'red',
                position: 'absolute',
                top: '-10px', // Adjust as needed
                right: '0px', // Adjust as needed
                fontSize: '0.75em', // Adjust as needed
              }}
            >
              -{salePercent}%
            </Typography>
          )}
          {salePercent !== 0 && (
            <Box
              component="span"
              sx={{
                color: 'text.disabled',
                textDecoration: 'line-through',
                mr: 0.5,
              }}
            >
              {fCurrency(price)}
            </Box>
          )}

          <Box
            component="span"
            sx={{
              mr: 0.5,
            }}
          >
            {fCurrency(Number(price) * ((100 - salePercent) / 100))}
          </Box>
        </Box>

        <Typography variant="h5">{title}</Typography>

        {renderDescription}
      </Stack>

      {/* <Divider sx={{ borderStyle: 'dashed' }} /> */}
    </Stack>
  );
}

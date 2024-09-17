/* eslint-disable react/no-danger */
import type { IProductItem } from 'src/types/product';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { fCurrency } from 'src/utils/format-number';

import { MuiBox } from 'src/components/@mui/mui-box';

// ----------------------------------------------------------------------

type Props = {
  product: IProductItem;
};

export function ProductDetailsSummary({ product }: Props) {
  const { slug, title, content, category, price, salePercent } = product;

  const renderDescription = (
    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Typography>
  );

  const renderInventoryType = (
    <MuiBox
      component="span"
      sx={{
        typography: 'overline',
        color: 'success.main',
      }}
    >
      {category.name}
    </MuiBox>
  );

  return (
    <Stack spacing={3} sx={{ pt: 3 }}>
      <Stack spacing={2} alignItems="flex-start">
        {renderInventoryType}

        <Typography variant="h6">{slug}</Typography>

        <MuiBox sx={{ position: 'relative', typography: 'h5' }}>
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
            <MuiBox
              component="span"
              sx={{
                color: 'text.disabled',
                textDecoration: 'line-through',
                mr: 0.5,
              }}
            >
              {fCurrency(price)}
            </MuiBox>
          )}

          <MuiBox
            component="span"
            sx={{
              mr: 0.5,
            }}
          >
            {fCurrency(Number(price) * ((100 - salePercent) / 100))}
          </MuiBox>
        </MuiBox>

        <Typography variant="h5">{title}</Typography>

        {renderDescription}
      </Stack>

      {/* <Divider sx={{ borderStyle: 'dashed' }} /> */}
    </Stack>
  );
}

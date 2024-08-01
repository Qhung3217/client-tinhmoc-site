import type { SxProps } from '@mui/material';
import type { IProductListItem } from 'src/types/product';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fCurrency } from 'src/utils/format-number';

import { Label } from 'src/components/label';
import { Image } from 'src/components/image';

import { useGetSaleInfo } from './@utils';

// ----------------------------------------------------------------------

type Props = {
  product: IProductListItem;
  sx?: SxProps;
};

export function ProductItem({ product, sx }: Props) {
  const { slug, title, thumbnail, price, salePercent, createdAt } = product;

  const { isSale, isNew, priceSale } = useGetSaleInfo({
    createdAt,
    price,
    salePercent,
  });

  const linkTo = paths.landing.product.details(slug);

  const renderLabels = (isNew || isSale) && (
    <Stack
      direction="row"
      alignItems="center"
      spacing={1}
      sx={{
        position: 'absolute',
        zIndex: 9,
        top: 16,
        right: 16,
      }}
    >
      {isNew && (
        <Label variant="filled" color="info">
          Mới
        </Label>
      )}
      {isSale && (
        <Label variant="filled" color="error">
          SALE
        </Label>
      )}
    </Stack>
  );

  const renderImg = (
    <Box sx={{ position: 'relative', p: 1 }}>
      <Image
        alt={title}
        src={`${thumbnail}`}
        ratio="2/3"
        effect="opacity"
        sx={{
          borderRadius: 0.5,
          '& .mnl__image__wrapper': {
            aspectRatio: '2/3',
          },
          '& .lazy-load-image-background.opacity:not(.lazy-load-image-loaded) img': {
            display: 'none',
          },
        }}
      />
    </Box>
  );

  const renderContent = (
    <Stack spacing={2} sx={{ p: 3, pt: 1 }}>
      <Link component={RouterLink} href={linkTo} color="inherit" variant="subtitle2" noWrap>
        {title}
      </Link>

      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" spacing={0.5} sx={{ typography: 'subtitle1' }}>
          {isSale && (
            <Box component="span" sx={{ color: 'text.disabled', textDecoration: 'line-through' }}>
              {fCurrency(priceSale)}
            </Box>
          )}

          <Box component="span">{fCurrency(price)}</Box>
        </Stack>
      </Stack>
    </Stack>
  );

  return (
    <Card
      sx={{
        '& img': { transform: 'scale(1)' },
        transition: (theme) =>
          theme.transitions.create(['background-color', 'transform'], {
            duration: theme.transitions.duration.standard,
            easing: theme.transitions.easing.easeInOut,
          }),

        '&:hover': {
          backgroundColor: 'primary.dark',
          '& img': {
            transform: 'scale(1.1)',
          },
        },

        borderRadius: 0,
        borderInlineEnd: '1px solid rgba(255,255,255,0.2)',
        borderBottom: '1px solid rgba(255,255,255,0.2)',
        px: 1,
        pt: 1,
        ...sx,
      }}
    >
      {renderLabels}

      {renderImg}

      {renderContent}
    </Card>
  );
}

import type { IProductListItem } from 'src/types/product';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { Typography, type SxProps } from '@mui/material';

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
  const { slug, title, thumbnail, price, salePercent, createdAt, category } = product;

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
        right: 9,
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
    <Box sx={{ position: 'relative', p: 0, flexShrink: 0 }}>
      <Image
        alt={title}
        src={`${thumbnail}`}
        ratio="1/1"
        effect="opacity"
        sx={{
          borderRadius: 0.5,
          '& .mnl__image__wrapper': {
            aspectRatio: '1/1',
          },
          '& .lazy-load-image-background.opacity:not(.lazy-load-image-loaded) img': {
            display: 'none',
          },
        }}
      />
    </Box>
  );

  const renderContent = (
    <Stack spacing={2} sx={{ pt: 0, justifyContent: 'space-between', height: 1 }}>
      {renderImg}
      <Box
        sx={{
          flex: 1,
          px: 2,
        }}
        width={1}
        textAlign="center"
        minHeight={0}
      >
        <Typography
          variant="caption"
          sx={{
            fontWeight: 700,
            textTransform: 'uppercase',

            color: 'text.secondary',
            mt: -1,
          }}
        >
          {category.name}
        </Typography>

        <Link
          component={RouterLink}
          href={linkTo}
          variant="subtitle2"
          textAlign="center"
          sx={{
            '-webkit-line-clamp': '2',
            '-webkit-box-orient': 'vertical',
            display: '-webkit-box',
            overflow: 'hidden',
            mt: 1,
            color: '#f5f5f5',
            fontWeight: 500,
          }}
        >
          {title}
        </Link>
      </Box>
      <Stack
        direction="row"
        spacing={0.5}
        minHeight={0}
        sx={{
          typography: 'subtitle2',
          fontWeight: 600,
          flexShrink: '0',
          alignItems: 'center',
          justifyContent: 'center',
          width: 1,
          px: 2,
          pb: 2,
        }}
      >
        <Box component="span" color={isSale || priceSale === '' ? 'error.main' : 'inherit'}>
          {priceSale === '' ? 'Liên hệ' : fCurrency(priceSale)}
        </Box>
        {isSale && (
          <Box component="span" sx={{ color: 'text.disabled', textDecoration: 'line-through' }}>
            {fCurrency(price)}
          </Box>
        )}
      </Stack>
    </Stack>
  );

  return (
    <Card
      sx={{
        '& img': { transform: 'scale(1)' },
        transition: (theme: any) =>
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
        height: 1,
        borderRadius: 0,
        borderInlineEnd: '1px solid rgba(255,255,255,0.2)',
        borderBottom: '1px solid rgba(255,255,255,0.2)',
        px: 1,
        pt: 1,

        ...sx,
      }}
    >
      {renderLabels}

      {renderContent}
    </Card>
  );
}

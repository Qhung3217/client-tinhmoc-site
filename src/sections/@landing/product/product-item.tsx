import type { IProductListItem } from 'src/types/product';

import dayjs from 'dayjs';
import { useMemo } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { fIsAfter } from 'src/utils/format-time';
import { fCurrency } from 'src/utils/format-number';

import { Label } from 'src/components/label';
import { Image } from 'src/components/image';

// ----------------------------------------------------------------------

type Props = {
  product: IProductListItem;
};

export function ProductItem({ product }: Props) {
  const { id, title, thumbnail, price, salePercent, createdAt } = product;

  const isSale = useMemo(() => !!salePercent, [salePercent]);

  const isNew = useMemo(() => {
    const sevenDaysNext = dayjs(createdAt).add(7, 'day').startOf('day');

    return fIsAfter(sevenDaysNext, Date.now());
  }, [createdAt]);

  const linkTo = paths.landing.product.details(id);

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
    <Stack spacing={2.5} sx={{ p: 3, pt: 2 }}>
      <Link component={RouterLink} href={linkTo} color="inherit" variant="subtitle2" noWrap>
        {title}
      </Link>

      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" spacing={0.5} sx={{ typography: 'subtitle1' }}>
          {isSale && (
            <Box component="span" sx={{ color: 'text.disabled', textDecoration: 'line-through' }}>
              {fCurrency(Number(price) - Number(price) * (salePercent / 100))}
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
      }}
    >
      {renderLabels}

      {renderImg}

      {renderContent}
    </Card>
  );
}

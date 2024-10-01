import type { IProductListItem } from 'src/types/product';

import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { Button, Typography, type SxProps } from '@mui/material';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Image } from 'src/components/image';
import { MuiBox } from 'src/components/@mui/mui-box';

// ----------------------------------------------------------------------

type Props = {
  product: IProductListItem;
  sx?: SxProps;
};

export function ProductItem({ product, sx }: Props) {
  const { slug, title, thumbnail, subContent } = product;

  const linkTo = paths.landing.product.details(slug);

  const renderImg = (
    <MuiBox
      sx={{
        position: 'relative',
        p: 0,
        flexShrink: 0,
        overflow: 'hidden',
        borderRadius: 0.2,
      }}
    >
      <Image
        alt={title}
        src={`${thumbnail}`}
        ratio="4/3"
        effect="opacity"
        sx={{
          transform: 'scale(1)',
          transition: '200ms ease-out all',
          '&:hover': {
            transform: 'scale(1.05)',
          },
          borderRadius: 0.2,
          '& .mnl__image__wrapper': {
            aspectRatio: '4/3',
          },
          '& .lazy-load-image-background.opacity:not(.lazy-load-image-loaded) img': {
            display: 'none',
          },
        }}
      />
    </MuiBox>
  );

  const renderContent = (
    <Stack spacing={2} sx={{ p: 1 }}>
      <MuiBox width={1} minHeight={0}>
        <Link
          component={RouterLink}
          href={linkTo}
          variant="subtitle1"
          sx={{
            '-webkit-line-clamp': '2',
            '-webkit-box-orient': 'vertical',
            display: '-webkit-box',
            overflow: 'hidden',
            color: '#f7f7f7',
            fontWeight: 700,
            position: 'relative',
            pb: 0.5,
            width: 'fit-content',
            '&:hover': {
              textDecoration: 'none',
            },
            '&::before': {
              content: "''",
              display: 'block',
              position: 'absolute',
              width: 1,
              maxWidth: 25,
              height: 2,
              backgroundColor: 'primary.main',
              borderRadius: 0.5,
              bottom: 0,
              left: 0,
              transition: '200ms ease-out all',
            },
            '&:hover&::before': {
              maxWidth: 1,
            },
          }}
        >
          {title}
        </Link>
        <Typography
          sx={{
            '-webkit-line-clamp': '1',
            '-webkit-box-orient': 'vertical',
            display: '-webkit-box',
            overflow: 'hidden',
            color: 'text.secondary',
            mt: 1,
          }}
        >
          {subContent}
        </Typography>
      </MuiBox>
      <MuiBox>
        <Button
          sx={{ borderRadius: 0.5, borderWidth: 2 }}
          size="small"
          variant="outlined"
          color="primary"
          component={RouterLink}
          href={linkTo}
        >
          XEM CHI TIẾT
        </Button>
      </MuiBox>
    </Stack>
  );

  return (
    <Card
      sx={{
        borderRadius: 0,
        backgroundColor: 'transparent',
        ...sx,
      }}
    >
      {renderImg}
      {renderContent}
    </Card>
  );
}

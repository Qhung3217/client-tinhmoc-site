import type { IProductItem } from 'src/types/product';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { useCopyToClipboard } from 'src/hooks/use-copy-to-clipboard';

import { fCurrency } from 'src/utils/format-number';

import { Label } from 'src/components/label';
import { toast } from 'src/components/snackbar';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = {
  product: IProductItem;
};

const TEL = '(+84) 0292 654 6543';

export function ProductDetailsSummary({ product, ...other }: Props) {
  const { copy } = useCopyToClipboard();

  const { id, name, price, newLabel, priceSale, saleLabel, subDescription } = product;

  const handleCopyTel = async () => {
    try {
      await copy(TEL);
      toast.info('Đã sao chép số điện thoại');
    } catch (error) {
      toast.error('Có lỗi xảy ra!');
    }
  };
  const handleCopyLink = async () => {
    try {
      await copy(window.location.href);
      toast.info('Đã sao chép đường dẫn');
    } catch (error) {
      toast.error('Có lỗi xảy ra!');
    }
  };

  const renderPrice = (
    <Box sx={{ typography: 'h5', color: 'primary.light' }}>
      {priceSale && (
        <Box
          component="span"
          sx={{
            color: 'text.disabled',
            textDecoration: 'line-through',
            mr: 1,
            typography: 'h6',
          }}
        >
          {fCurrency(priceSale)}
        </Box>
      )}

      {fCurrency(price)}
    </Box>
  );

  const renderShare = (
    <Stack direction="row" spacing={3} justifyContent="center">
      <Button
        sx={{
          typography: 'subtitle2',
          color: 'text.secondary',
        }}
        onClick={handleCopyLink}
        startIcon={<Iconify icon="solar:share-bold" width={16} />}
      >
        Chia sẻ
      </Button>
    </Stack>
  );

  const renderActions = (
    <Stack sx={{ flexDirection: { xs: 'column-reverse', sm: 'row' } }} spacing={2}>
      <Button
        fullWidth
        size="large"
        variant="text"
        onClick={handleCopyTel}
        sx={{ whiteSpace: 'nowrap' }}
      >
        (+84) 0292 654 6543
      </Button>

      <Button
        fullWidth
        size="large"
        variant="contained"
        component={RouterLink}
        href="tel:(+84)02926546543"
        color="primary"
      >
        Gọi ngay
      </Button>
    </Stack>
  );

  const renderSubDescription = (
    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
      {subDescription}
    </Typography>
  );

  const renderLabels = (newLabel.enabled || saleLabel.enabled) && (
    <Stack direction="row" alignItems="center" spacing={1}>
      {newLabel.enabled && <Label color="info">{newLabel.content}</Label>}
      {saleLabel.enabled && <Label color="error">{saleLabel.content}</Label>}
    </Stack>
  );

  return (
    <Stack spacing={3} sx={{ pt: 3 }} {...other}>
      <Stack spacing={2} alignItems="flex-start">
        {renderLabels}

        <Typography variant="h5">{name}</Typography>

        {renderPrice}

        {renderShare}
      </Stack>

      <Divider sx={{ borderStyle: 'dashed' }} />

      {renderActions}

      {/* {renderShare} */}
    </Stack>
  );
}

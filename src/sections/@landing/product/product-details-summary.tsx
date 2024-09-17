import type { IProductItem } from 'src/types/product';

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
import { MuiBox } from 'src/components/@mui/mui-box';

import { useGetSaleInfo } from './@utils';

// ----------------------------------------------------------------------

type Props = {
  product: IProductItem;
};

const TEL = '(+84) 0292 654 6543';

export function ProductDetailsSummary({ product, ...other }: Props) {
  const { copy } = useCopyToClipboard();

  const { title, price, salePercent, createdAt } = product;

  const { isSale, isNew, priceSale } = useGetSaleInfo({
    createdAt,
    price,
    salePercent,
  });

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
    <MuiBox sx={{ typography: 'h5', color: 'primary.light' }}>
      {!!salePercent && (
        <MuiBox
          component="span"
          sx={{
            color: 'text.disabled',
            textDecoration: 'line-through',
            mr: 1,
            typography: 'h6',
          }}
        >
          {fCurrency(price)}
        </MuiBox>
      )}

      {priceSale !== '' && fCurrency(priceSale)}
    </MuiBox>
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
        startIcon={<Iconify icon="line-md:phone-call-twotone-loop" />}
      >
        Liên hệ ngay
      </Button>
    </Stack>
  );

  const renderLabels = (isNew || isSale) && (
    <Stack direction="row" alignItems="center" spacing={1}>
      {isNew && <Label color="info">Mới</Label>}
      {isSale && <Label color="error">SALE</Label>}
    </Stack>
  );

  return (
    <Stack spacing={3} sx={{ pt: 3 }} {...other}>
      <Stack spacing={2} alignItems="flex-start">
        {renderLabels}

        <Typography variant="h5">{title}</Typography>

        {renderPrice}

        {renderShare}
      </Stack>

      <Divider sx={{ borderStyle: 'dashed' }} />

      {renderActions}

      {/* {renderShare} */}
    </Stack>
  );
}

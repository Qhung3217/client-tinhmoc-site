import type { GridCellParams } from '@mui/x-data-grid';

import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';

import { fCurrency } from 'src/utils/format-number';
import { fTime, fDate } from 'src/utils/format-time';

import { MuiBox } from 'src/components/@mui/mui-box';

// ----------------------------------------------------------------------

type ParamsProps = {
  params: GridCellParams;
};

export function RenderCellSlug({ params }: ParamsProps) {
  return params.row.slug;
}

export function RenderCellPriority({ params }: ParamsProps) {
  return (
    <MuiBox
      sx={{
        display: 'inline-block',
        padding: '2px 8px',
        borderRadius: '8px',
        backgroundColor: 'primary.main',
        color: 'white',
        textAlign: 'center',
        minWidth: '24px',
      }}
    >
      {params.row.priority}
    </MuiBox>
  );
}

export function RenderCellPrice({ params }: ParamsProps) {
  return fCurrency(params.row.price);
}

export function RenderCellSalePercent({ params }: ParamsProps) {
  return `${params.row.salePercent}%`;
}

export function RenderCellCreateBy({ params }: ParamsProps) {
  return params.row.createBy.email;
}

export function RenderCellCreatedAt({ params }: ParamsProps) {
  return (
    <Stack spacing={0.5}>
      <MuiBox component="span">{fDate(params.row.createdAt)}</MuiBox>
      <MuiBox component="span" sx={{ typography: 'caption', color: 'text.secondary' }}>
        {fTime(params.row.createdAt)}
      </MuiBox>
    </Stack>
  );
}

export function RenderCellProduct({
  params,
  onViewRow,
}: ParamsProps & {
  onViewRow: () => void;
}) {
  return (
    <Stack direction="row" alignItems="center" sx={{ py: 2, width: 1 }}>
      <Avatar
        alt={params.row.title}
        src={params.row.thumbnail}
        variant="rounded"
        sx={{ width: 64, height: 64, mr: 2 }}
      />

      <ListItemText
        disableTypography
        primary={
          <Typography noWrap variant="subtitle2">
            {params.row.title}
          </Typography>
        }
        secondary={
          <MuiBox component="div" sx={{ typography: 'body2', color: 'text.disabled' }}>
            {params.row.category.name}
          </MuiBox>
        }
        sx={{ display: 'flex', flexDirection: 'column' }}
      />
    </Stack>
  );
}

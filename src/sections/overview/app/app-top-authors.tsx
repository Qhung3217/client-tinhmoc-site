import type { BoxProps } from '@mui/material';
import type { CardProps } from '@mui/material/Card';

import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';

import { orderBy } from 'src/utils/helper';
import { fShortenNumber } from 'src/utils/format-number';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { MuiBox } from 'src/components/@mui/mui-box';

// ----------------------------------------------------------------------

type Props = CardProps & {
  title?: string;
  subheader?: string;
  list: {
    id: string;
    name: string;
    avatarUrl: string;
    totalFavorites: number;
  }[];
};

export function AppTopAuthors({ title, subheader, list, ...other }: Props) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <MuiBox
        sx={{
          p: 3,
          gap: 3,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {orderBy(list, ['totalFavorites'], ['desc']).map((item, index) => (
          <Item key={item.id} item={item} index={index} />
        ))}
      </MuiBox>
    </Card>
  );
}

// ----------------------------------------------------------------------

type ItemProps = BoxProps & {
  index: number;
  item: Props['list'][number];
};

function Item({ item, index, sx, ...other }: ItemProps) {
  return (
    <MuiBox
      sx={{
        gap: 2,
        display: 'flex',
        alignItems: 'center',
        ...sx,
      }}
      {...other}
    >
      <Avatar alt={item.name} src={item.avatarUrl} />

      <MuiBox flexGrow={1}>
        <MuiBox sx={{ typography: 'subtitle2' }}>{item.name}</MuiBox>
        <MuiBox
          sx={{
            gap: 0.5,
            mt: 0.5,
            alignItems: 'center',
            typography: 'caption',
            display: 'inline-flex',
            color: 'text.secondary',
          }}
        >
          <Iconify icon="solar:heart-bold" width={14} />
          {fShortenNumber(item.totalFavorites)}
        </MuiBox>
      </MuiBox>

      <MuiBox
        sx={{
          width: 40,
          height: 40,
          display: 'flex',
          borderRadius: '50%',
          alignItems: 'center',
          color: 'primary.main',
          justifyContent: 'center',
          bgcolor: (theme: any) => varAlpha(theme.vars.palette.primary.mainChannel, 0.08),
          ...(index === 1 && {
            color: 'info.main',
            bgcolor: (theme: any) => varAlpha(theme.vars.palette.info.mainChannel, 0.08),
          }),
          ...(index === 2 && {
            color: 'error.main',
            bgcolor: (theme: any) => varAlpha(theme.vars.palette.error.mainChannel, 0.08),
          }),
        }}
      >
        <Iconify width={24} icon="solar:cup-star-bold" />
      </MuiBox>
    </MuiBox>
  );
}

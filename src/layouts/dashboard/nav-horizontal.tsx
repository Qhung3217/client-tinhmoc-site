import type { Theme } from 'src/theme/types';
import type { Breakpoint } from '@mui/material/styles';
import type { NavSectionProps } from 'src/components/nav-section';

import Divider from '@mui/material/Divider';

import { varAlpha } from 'src/theme/styles';

import { MuiBox } from 'src/components/@mui/mui-box';
import { NavSectionHorizontal } from 'src/components/nav-section';

// ----------------------------------------------------------------------

export type NavHorizontalProps = NavSectionProps & {
  layoutQuery: Breakpoint;
};

export function NavHorizontal({ data, layoutQuery, sx, ...other }: NavHorizontalProps) {
  return (
    <MuiBox
      sx={{
        width: 1,
        position: 'relative',
        flexDirection: 'column',
        display: { xs: 'none', [layoutQuery]: 'flex' },
        borderBottom: (theme: Theme) =>
          `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.08)}`,
        ...sx,
      }}
    >
      <Divider
        sx={{ top: 0, left: 0, width: 1, zIndex: 9, position: 'absolute', borderStyle: 'dashed' }}
      />

      <MuiBox
        sx={{
          px: 1.5,
          height: 'var(--layout-nav-horizontal-height)',
          backgroundColor: 'var(--layout-nav-horizontal-bg)',
          backdropFilter: `blur(var(--layout-header-blur))`,
          WebkitBackdropFilter: `blur(var(--layout-header-blur))`,
        }}
      >
        <NavSectionHorizontal data={data} {...other} />
      </MuiBox>
    </MuiBox>
  );
}

import type { BoxProps } from '@mui/material/Box';

import { MuiBox } from 'src/components/@mui/mui-box';

import { layoutClasses } from '../classes';

// ----------------------------------------------------------------------

export function Main({ children, sx, ...other }: BoxProps) {
  return (
    <MuiBox
      component="main"
      className={layoutClasses.main}
      sx={{
        display: 'flex',
        flex: '1 1 auto',
        flexDirection: 'column',
        ...sx,
      }}
      {...other}
    >
      {children}
    </MuiBox>
  );
}

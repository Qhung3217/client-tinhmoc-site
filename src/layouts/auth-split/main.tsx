import type { BoxProps } from '@mui/material/Box';
import type { Breakpoint } from '@mui/material/styles';

import { useTheme } from '@mui/material/styles';

import { layoutClasses } from 'src/layouts/classes';

import { MuiBox } from 'src/components/@mui/mui-box';

// ----------------------------------------------------------------------

type MainProps = BoxProps & {
  layoutQuery: Breakpoint;
};

export function Main({ sx, children, layoutQuery, ...other }: MainProps) {
  const theme = useTheme();

  return (
    <MuiBox
      component="main"
      className={layoutClasses.main}
      sx={{
        display: 'flex',
        flex: '1 1 auto',
        flexDirection: 'column',
        [theme.breakpoints.up(layoutQuery)]: {
          flexDirection: 'row',
        },
        ...sx,
      }}
      {...other}
    >
      {children}
    </MuiBox>
  );
}

// ----------------------------------------------------------------------

export function Content({ sx, children, layoutQuery, ...other }: MainProps) {
  const theme = useTheme();

  const renderContent = (
    <MuiBox
      sx={{
        width: 1,
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 'var(--layout-auth-content-width)',
      }}
    >
      {children}
    </MuiBox>
  );

  return (
    <MuiBox
      className={layoutClasses.content}
      sx={{
        px: 2,
        py: 5,
        display: 'flex',
        flex: '1 1 auto',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        [theme.breakpoints.up(layoutQuery)]: {
          px: 0,
          py: 'calc(var(--layout-header-desktop-height) + 24px)',
        },
        ...sx,
      }}
      {...other}
    >
      {renderContent}
    </MuiBox>
  );
}

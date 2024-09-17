import type { BoxProps } from '@mui/material/Box';

import Portal from '@mui/material/Portal';
import LinearProgress from '@mui/material/LinearProgress';

import { MuiBox } from '../@mui/mui-box';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  portal?: boolean;
};

export function LoadingScreen({ portal, sx, ...other }: Props) {
  const content = (
    <MuiBox
      sx={{
        px: 5,
        width: 1,
        flexGrow: 1,
        minHeight: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...sx,
      }}
      {...other}
    >
      <LinearProgress color="inherit" sx={{ width: 1, maxWidth: 360 }} />
    </MuiBox>
  );

  if (portal) {
    return <Portal>{content}</Portal>;
  }

  return content;
}

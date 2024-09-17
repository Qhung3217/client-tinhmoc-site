import type { BoxProps } from '@mui/material/Box';

import Portal from '@mui/material/Portal';

import { AnimateLogo1 } from 'src/components/animate';

import { MuiBox } from '../@mui/mui-box';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  portal?: boolean;
};

export function SplashScreen({ portal = true, sx, ...other }: Props) {
  const content = (
    <MuiBox sx={{ overflow: 'hidden' }}>
      <MuiBox
        sx={{
          right: 0,
          width: 1,
          bottom: 0,
          height: 1,
          zIndex: 9998,
          display: 'flex',
          position: 'fixed',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.default',
          ...sx,
        }}
        {...other}
      >
        <AnimateLogo1 />
      </MuiBox>
    </MuiBox>
  );

  if (portal) {
    return <Portal>{content}</Portal>;
  }

  return content;
}

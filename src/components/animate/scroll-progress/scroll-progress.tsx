import type { MotionValue } from 'framer-motion';
import type { BoxProps } from '@mui/material/Box';
import type { Theme, SxProps } from '@mui/system';

import { m, useSpring } from 'framer-motion';

import { MuiBox } from 'src/components/@mui/mui-box';
// ----------------------------------------------------------------------

export interface ScrollProgressProps extends BoxProps {
  size?: number;
  thickness?: number;
  progress: MotionValue<number>;
  variant: 'linear' | 'circular';
  color?: 'inherit' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';
  sx?: SxProps<Theme>;
}

export function ScrollProgress({
  size,
  variant,
  progress,
  thickness = 3.6,
  color = 'primary',
  sx,
  ...other
}: ScrollProgressProps) {
  const scaleX = useSpring(progress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const progressSize = variant === 'circular' ? size ?? 64 : size ?? 3;

  const renderCircular = (
    <MuiBox
      component="svg"
      width={progressSize}
      height={progressSize}
      viewBox={`0 0 ${progressSize} ${progressSize}`}
      xmlns="http://www.w3.org/2000/svg"
      sx={{
        width: progressSize,
        height: progressSize,
        transform: 'rotate(-90deg)',
        color: (theme: any) => theme.vars.palette.text.primary,
        ...(color !== 'inherit' && {
          color: (theme: any) => theme.vars.palette[color].main,
        }),
        circle: {
          fill: 'none',
          strokeDashoffset: 0,
          strokeWidth: thickness,
          stroke: 'currentColor',
        },
        ...sx,
      }}
      {...other}
    >
      <MuiBox
        component="circle"
        cx={progressSize / 2}
        cy={progressSize / 2}
        r={progressSize / 2 - thickness - 4}
        strokeOpacity="0.2"
        pathLength="1"
      />
      <MuiBox
        component={m.circle}
        cx={progressSize / 2}
        cy={progressSize / 2}
        r={progressSize / 2 - thickness - 4}
        pathLength="1"
        style={{ pathLength: progress }}
      />
    </MuiBox>
  );

  const renderLinear = (
    <MuiBox
      component={m.div}
      sx={{
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1999,
        height: progressSize,
        transformOrigin: '0%',
        bgcolor: 'text.primary',
        ...(color !== 'inherit' && {
          background: (theme: any) =>
            `linear-gradient(135deg, ${theme.vars.palette[color].light}, ${theme.vars.palette[color].main})`,
        }),
        ...sx,
      }}
      style={{ scaleX }}
      {...other}
    />
  );

  return (
    <MuiBox sx={{ overflow: 'hidden' }}>
      {variant === 'circular' ? renderCircular : renderLinear}
    </MuiBox>
  );
}

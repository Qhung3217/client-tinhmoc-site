import type { MotionProps } from 'framer-motion';
import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';
import { forwardRef } from 'react';

import { MuiBox } from '../@mui/mui-box';
import { varContainer } from './variants';

// ----------------------------------------------------------------------

export type MotionContainerProps = BoxProps &
  MotionProps & {
    animate?: boolean;
    action?: boolean;
  };

export const MotionContainer = forwardRef<HTMLDivElement, MotionContainerProps>(
  ({ animate, action = false, children, ...other }, ref) => {
    const commonProps = {
      ref,
      component: m.div,
      variants: varContainer(),
      initial: action ? false : 'initial',
      animate: action ? (animate ? 'animate' : 'exit') : 'animate',
      exit: action ? undefined : 'exit',
      ...other,
    };

    return <MuiBox {...commonProps}>{children}</MuiBox>;
  }
);

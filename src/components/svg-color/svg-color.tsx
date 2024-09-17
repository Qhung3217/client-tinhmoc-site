import { forwardRef } from 'react';

import { MuiBox } from '../@mui/mui-box';
import { svgColorClasses } from './classes';

import type { SvgColorProps } from './types';

// ----------------------------------------------------------------------

export const SvgColor = forwardRef<HTMLSpanElement, SvgColorProps>(
  ({ src, className, sx, ...other }, ref) => (
    <MuiBox
      ref={ref}
      component="span"
      className={svgColorClasses.root.concat(className ? ` ${className}` : '')}
      sx={{
        width: 24,
        height: 24,
        flexShrink: 0,
        display: 'inline-flex',
        bgcolor: 'currentColor',
        mask: `url(${src}) no-repeat center / contain`,
        WebkitMask: `url(${src}) no-repeat center / contain`,
        ...sx,
      }}
      {...other}
    />
  )
);

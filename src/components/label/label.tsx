import { forwardRef } from 'react';

import { useTheme } from '@mui/material/styles';

import { StyledLabel } from './styles';
import { labelClasses } from './classes';
import { MuiBox } from '../@mui/mui-box';

import type { LabelProps } from './types';

// ----------------------------------------------------------------------

export const Label = forwardRef<HTMLSpanElement, LabelProps>(
  ({ children, color = 'default', variant = 'soft', startIcon, endIcon, sx, ...other }, ref) => {
    const theme = useTheme();

    const iconStyles = {
      width: 16,
      height: 16,
      '& svg, img': {
        width: 1,
        height: 1,
        objectFit: 'cover',
      },
    };

    return (
      <StyledLabel
        ref={ref}
        component="span"
        className={labelClasses.root}
        ownerState={{ color, variant }}
        sx={{ ...(startIcon && { pl: 0.75 }), ...(endIcon && { pr: 0.75 }), ...sx }}
        theme={theme}
        {...other}
      >
        {startIcon && (
          <MuiBox component="span" className={labelClasses.icon} sx={{ mr: 0.75, ...iconStyles }}>
            {startIcon}
          </MuiBox>
        )}

        {typeof children === 'string' ? sentenceCase(children) : children}

        {endIcon && (
          <MuiBox component="span" className={labelClasses.icon} sx={{ ml: 0.75, ...iconStyles }}>
            {endIcon}
          </MuiBox>
        )}
      </StyledLabel>
    );
  }
);

// ----------------------------------------------------------------------

function sentenceCase(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

import type { BoxProps } from '@mui/material/Box';

import { forwardRef } from 'react';

import NoSsr from '@mui/material/NoSsr';

import { RouterLink } from 'src/routes/components';

import { CONFIG } from 'src/config-global';

import { logoClasses } from './classes';
import { MuiBox } from '../@mui/mui-box';

// ----------------------------------------------------------------------

export type LogoProps = BoxProps & {
  href?: string;
  disableLink?: boolean;
};

export const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ width = 40, height = 40, disableLink = false, className, href = '/', sx, ...other }, ref) => {
    /*
     * OR using local (public folder)
     * const logo = ( <Box alt="logo" component="img" src={`${CONFIG.site.basePath}/logo/logo-single.svg`} width={width} height={height} /> );
     */

    const logo = (
      <MuiBox
        alt="logo"
        component="img"
        src={`${CONFIG.site.basePath}/logo/logo-single.svg`}
        width={width}
        height={height}
      />
    );

    return (
      <NoSsr
        fallback={
          <MuiBox
            width={width}
            height={height}
            className={logoClasses.root.concat(className ? ` ${className}` : '')}
            sx={{ flexShrink: 0, display: 'inline-flex', verticalAlign: 'middle', ...sx }}
          />
        }
      >
        <MuiBox
          ref={ref}
          component={RouterLink}
          href={href}
          width={width}
          height={height}
          className={logoClasses.root.concat(className ? ` ${className}` : '')}
          aria-label="logo"
          sx={{
            flexShrink: 0,
            display: 'inline-flex',
            verticalAlign: 'middle',
            ...(disableLink && { pointerEvents: 'none' }),
            ...sx,
          }}
          {...other}
        >
          {logo}
        </MuiBox>
      </NoSsr>
    );
  }
);

import type { BoxProps } from '@mui/material/Box';
import type { Breakpoint } from '@mui/material/styles';

import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config-global';
import { varAlpha, bgGradient } from 'src/theme/styles';

import { MuiBox } from 'src/components/@mui/mui-box';

// ----------------------------------------------------------------------

type SectionProps = BoxProps & {
  title?: string;
  method?: string;
  imgUrl?: string;
  subtitle?: string;
  layoutQuery: Breakpoint;
  methods?: {
    path: string;
    icon: string;
    label: string;
  }[];
};

export function Section({
  sx,
  method,
  layoutQuery,
  methods,
  title = 'Manage the job',
  imgUrl = `${CONFIG.site.basePath}/logo/logo-single.svg`,
  subtitle = '',
  ...other
}: SectionProps) {
  const theme = useTheme();

  return (
    <MuiBox
      sx={{
        ...bgGradient({
          color: `0deg, ${varAlpha(theme.vars.palette.background.defaultChannel, 0.92)}, ${varAlpha(theme.vars.palette.background.defaultChannel, 0.92)}`,
          imgUrl: `${CONFIG.site.basePath}/assets/background/background-3-blur.webp`,
        }),
        px: 3,
        pb: 3,
        width: 1,
        maxWidth: '50%',
        display: 'none',
        position: 'relative',
        pt: 'var(--layout-header-desktop-height)',
        [theme.breakpoints.up(layoutQuery)]: {
          gap: 8,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
        },
        ...sx,
      }}
      {...other}
    >
      <div>
        <Typography variant="h3" sx={{ textAlign: 'center' }}>
          {/* {title} */}
        </Typography>

        {subtitle && (
          <Typography sx={{ color: 'text.secondary', textAlign: 'center', mt: 2 }}>
            {subtitle}
          </Typography>
        )}
      </div>

      <MuiBox
        component="img"
        alt="Dashboard illustration"
        src={imgUrl}
        sx={{ width: 432, height: 324 }}
      />
    </MuiBox>
  );
}

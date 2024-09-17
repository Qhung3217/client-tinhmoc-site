import type { Theme } from '@mui/material/styles';
import type { ButtonBaseProps } from '@mui/material/ButtonBase';

import Switch from '@mui/material/Switch';
import Tooltip from '@mui/material/Tooltip';
import ButtonBase from '@mui/material/ButtonBase';

import { CONFIG } from 'src/config-global';
import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { MuiBox } from 'src/components/@mui/mui-box';

import { SvgColor } from '../../svg-color';

// ----------------------------------------------------------------------

type Props = ButtonBaseProps & {
  icon: string;
  label: string;
  selected: boolean;
  tooltip?: string;
};

export function BaseOption({ icon, label, tooltip, selected, ...other }: Props) {
  return (
    <ButtonBase
      disableRipple
      sx={{
        px: 2,
        py: 2.5,
        borderRadius: 2,
        cursor: 'pointer',
        flexDirection: 'column',
        alignItems: 'flex-start',
        border: (theme) => `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`,
        '&:hover': { bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.08) },
        ...(selected && {
          bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.08),
        }),
      }}
      {...other}
    >
      <MuiBox
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{ width: 1, mb: 3 }}
      >
        <SvgColor src={`${CONFIG.site.basePath}/assets/icons/setting/ic-${icon}.svg`} />
        <Switch name={label} size="small" color="default" checked={selected} sx={{ mr: -0.75 }} />
      </MuiBox>

      <MuiBox display="flex" alignItems="center" justifyContent="space-between" sx={{ width: 1 }}>
        <MuiBox
          component="span"
          sx={{
            lineHeight: '18px',
            fontWeight: 'fontWeightSemiBold',
            fontSize: (theme: Theme) => theme.typography.pxToRem(13),
          }}
        >
          {label}
        </MuiBox>

        {tooltip && (
          <Tooltip
            arrow
            title={tooltip}
            slotProps={{
              tooltip: { sx: { maxWidth: 240, mr: 0.5 } },
            }}
          >
            <Iconify
              width={16}
              icon="eva:info-outline"
              sx={{ cursor: 'pointer', color: 'text.disabled' }}
            />
          </Tooltip>
        )}
      </MuiBox>
    </ButtonBase>
  );
}

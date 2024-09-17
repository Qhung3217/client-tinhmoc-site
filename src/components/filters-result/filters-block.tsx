import { type Theme, type SxProps } from '@mui/material/styles';

import { MuiBox } from '../@mui/mui-box';

// ----------------------------------------------------------------------

export type FilterBlockProps = {
  label: string;
  isShow: boolean;
  sx?: SxProps<Theme>;
  children: React.ReactNode;
};

export function FiltersBlock({ label, children, isShow, sx }: FilterBlockProps) {
  if (!isShow) {
    return null;
  }

  return (
    <MuiBox
      gap={1}
      display="flex"
      sx={{
        p: 1,
        borderRadius: 1,
        overflow: 'hidden',
        border: (theme: Theme) => `dashed 1px ${theme.vars.palette.divider}`,
        ...sx,
      }}
    >
      <MuiBox
        component="span"
        sx={{
          height: 24,
          lineHeight: '24px',
          fontSize: (theme: Theme) => theme.typography.subtitle2.fontSize,
          fontWeight: (theme: Theme) => theme.typography.subtitle2.fontWeight,
        }}
      >
        {label}
      </MuiBox>
      <MuiBox gap={1} display="flex" flexWrap="wrap">
        {children}
      </MuiBox>
    </MuiBox>
  );
}

import type { ChipProps } from '@mui/material/Chip';
import type { Theme, SxProps } from '@mui/material/styles';

import Button from '@mui/material/Button';

import { Iconify } from 'src/components/iconify';

import { MuiBox } from '../@mui/mui-box';

// ----------------------------------------------------------------------

export const chipProps: ChipProps = {
  size: 'small',
  variant: 'soft',
};

type FiltersResultProps = {
  totalResults: number;
  onReset: () => void;
  sx?: SxProps<Theme>;
  children: React.ReactNode;
};

export function FiltersResult({ totalResults, onReset, sx, children }: FiltersResultProps) {
  return (
    <MuiBox sx={sx}>
      <MuiBox sx={{ mb: 1.5, typography: 'body2' }}>
        <strong>{totalResults}</strong>
        <MuiBox component="span" sx={{ color: 'text.secondary', ml: 0.25 }}>
          results found
        </MuiBox>
      </MuiBox>

      <MuiBox flexGrow={1} gap={1} display="flex" flexWrap="wrap" alignItems="center">
        {children}

        <Button
          color="error"
          onClick={onReset}
          startIcon={<Iconify icon="solar:trash-bin-trash-bold" />}
        >
          Clear
        </Button>
      </MuiBox>
    </MuiBox>
  );
}

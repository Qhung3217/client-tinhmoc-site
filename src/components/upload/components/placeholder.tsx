import type { BoxProps } from '@mui/material/Box';

import Stack from '@mui/material/Stack';

import { UploadIllustration } from 'src/assets/illustrations';

import { MuiBox } from 'src/components/@mui/mui-box';

// ----------------------------------------------------------------------

export function UploadPlaceholder({ ...other }: BoxProps) {
  return (
    <MuiBox
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
      {...other}
    >
      <UploadIllustration hideBackground sx={{ width: 200 }} />

      <Stack spacing={1} sx={{ textAlign: 'center' }}>
        <MuiBox sx={{ typography: 'h6' }}>Drop or select file</MuiBox>
        <MuiBox sx={{ typography: 'body2', color: 'text.secondary' }}>
          Drop files here or click to
          <MuiBox
            component="span"
            sx={{ mx: 0.5, color: 'primary.main', textDecoration: 'underline' }}
          >
            browse
          </MuiBox>
          through your machine.
        </MuiBox>
      </Stack>
    </MuiBox>
  );
}

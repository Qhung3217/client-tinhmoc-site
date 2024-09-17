import type { FileRejection } from 'react-dropzone';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { fData } from 'src/utils/format-number';

import { varAlpha } from 'src/theme/styles';

import { MuiBox } from 'src/components/@mui/mui-box';

import { fileData } from '../../file-thumbnail';

// ----------------------------------------------------------------------

type Props = {
  files: FileRejection[];
};

export function RejectionFiles({ files }: Props) {
  if (!files.length) {
    return null;
  }

  return (
    <Paper
      variant="outlined"
      sx={{
        py: 1,
        px: 2,
        mt: 3,
        textAlign: 'left',
        borderStyle: 'dashed',
        borderColor: 'error.main',
        bgcolor: (theme) => varAlpha(theme.vars.palette.error.mainChannel, 0.08),
      }}
    >
      {files.map(({ file, errors }) => {
        const { path, size } = fileData(file);

        return (
          <MuiBox key={path} sx={{ my: 1 }}>
            <Typography variant="subtitle2" noWrap>
              {path} - {size ? fData(size) : ''}
            </Typography>

            {errors.map((error) => (
              <MuiBox key={error.code} component="span" sx={{ typography: 'caption' }}>
                - {error.message}
              </MuiBox>
            ))}
          </MuiBox>
        );
      })}
    </Paper>
  );
}

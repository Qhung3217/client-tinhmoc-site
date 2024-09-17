import type { BoxProps } from '@mui/material/Box';

import Typography from '@mui/material/Typography';

import { MuiBox } from '../@mui/mui-box';

// ----------------------------------------------------------------------

type SearchNotFoundProps = BoxProps & {
  query?: string;
};

export function SearchNotFound({ query, sx, ...other }: SearchNotFoundProps) {
  if (!query) {
    return (
      <Typography variant="body2" sx={sx}>
        Hãy nhập từ khóa
      </Typography>
    );
  }

  return (
    <MuiBox sx={{ textAlign: 'center', borderRadius: 1.5, ...sx }} {...other}>
      <MuiBox sx={{ mb: 1, typography: 'h6' }}>Không tìm thấy</MuiBox>

      <Typography variant="body2">
        Không tìm thấy sản phẩm với từ khóa &nbsp;
        <strong>{`"${query}"`}</strong>
        .
        <br /> Hãy thử lại với từ khóa khác.
      </Typography>
    </MuiBox>
  );
}

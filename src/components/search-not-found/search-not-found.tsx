import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

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
    <Box sx={{ textAlign: 'center', borderRadius: 1.5, ...sx }} {...other}>
      <Box sx={{ mb: 1, typography: 'h6' }}>Không tìm thấy</Box>

      <Typography variant="body2">
        Không tìm thấy sản phẩm với từ khóa &nbsp;
        <strong>{`"${query}"`}</strong>
        .
        <br /> Hãy thử lại với từ khóa khác.
      </Typography>
    </Box>
  );
}

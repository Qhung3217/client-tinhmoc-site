import type { TypographyProps } from '@mui/material';

import { Typography } from '@mui/material';

export default function SectionTitle({ children, sx, ...other }: TypographyProps) {
  return (
    <Typography
      color="primary.main"
      sx={{
        mx: 'auto',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 30,
        fontWeight: 600,
        lineHeight: 1.8,
        ...sx,
      }}
      {...other}
    >
      {children}
    </Typography>
  );
}

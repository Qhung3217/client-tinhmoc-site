import type { TypographyProps } from '@mui/material';

import { Typography } from '@mui/material';

export default function SubTitle({ children, sx, ...other }: TypographyProps) {
  return (
    <Typography
      sx={{
        color: '#868686',
        fontSize: 18,
        lineHeight: 1.5,
        letterSpacing: 2,
        width: 1,
        display: 'block',
        textAlign: 'center',

        ...sx,
      }}
      {...other}
    >
      {children}
    </Typography>
  );
}

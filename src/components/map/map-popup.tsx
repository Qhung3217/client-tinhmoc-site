import type { PopupProps } from 'react-map-gl';
import type { BoxProps } from '@mui/material/Box';

import { Popup } from 'react-map-gl';

import Box from '@mui/material/Box';

// ----------------------------------------------------------------------
type Props = PopupProps & BoxProps;
export function MapPopup({ sx, children, ...other }: any) {
  return (
    <Box component={Popup} anchor="bottom" sx={sx} {...other}>
      {children}
    </Box>
  );
}

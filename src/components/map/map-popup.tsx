import { Popup } from 'react-map-gl';

import Box from '@mui/material/Box';

// ----------------------------------------------------------------------

export function MapPopup({ sx, children, ...other }: any) {
  return (
    <Box component={Popup} anchor="bottom" sx={sx} {...other}>
      {children}
    </Box>
  );
}

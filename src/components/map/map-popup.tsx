import { Popup } from 'react-map-gl';

import { MuiBox } from '../@mui/mui-box';

// ----------------------------------------------------------------------

export function MapPopup({ sx, children, ...other }: any) {
  return (
    <MuiBox component={Popup} anchor="bottom" sx={sx} {...other}>
      {children}
    </MuiBox>
  );
}

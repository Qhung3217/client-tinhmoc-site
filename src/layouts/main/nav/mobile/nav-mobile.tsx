import { useEffect } from 'react';

import Drawer from '@mui/material/Drawer';

import { usePathname } from 'src/routes/hooks';

import { Logo } from 'src/components/logo';
import { NavUl } from 'src/components/nav-section';
import { Scrollbar } from 'src/components/scrollbar';
import { MuiBox } from 'src/components/@mui/mui-box';

import { NavList } from './nav-mobile-list';

import type { NavMainProps } from '../types';

// ----------------------------------------------------------------------

export type NavMobileProps = NavMainProps & {
  open: boolean;
  onClose: () => void;
  slots?: {
    topArea?: React.ReactNode;
    bottomArea?: React.ReactNode;
  };
};

export function NavMobile({ data, open, onClose, slots, sx }: NavMobileProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (open) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <Drawer
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          display: 'flex',
          flexDirection: 'column',
          width: 'var(--layout-nav-mobile-width)',
          ...sx,
        },
      }}
    >
      {slots?.topArea ?? (
        <MuiBox display="flex" sx={{ pt: 3, pb: 2, pl: 2.5 }}>
          <Logo />
        </MuiBox>
      )}

      <Scrollbar fillContent>
        <MuiBox
          component="nav"
          display="flex"
          flexDirection="column"
          flex="1 1 auto"
          sx={{ pb: 3 }}
        >
          <NavUl>
            {data.map((list) => (
              <NavList key={list.title} data={list} />
            ))}
          </NavUl>
        </MuiBox>
      </Scrollbar>
    </Drawer>
  );
}

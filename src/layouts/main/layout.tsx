import type { Theme, SxProps, Breakpoint } from '@mui/material/styles';

import Alert from '@mui/material/Alert';
import { useTheme } from '@mui/material/styles';

import { usePathname } from 'src/routes/hooks';

import { useBoolean } from 'src/hooks/use-boolean';

import { Logo } from 'src/components/logo';

import { Main } from './main';
import { HomeFooter } from './footer';
import { NavMobile } from './nav/mobile';
import { NavDesktop } from './nav/desktop';
import { HeaderBase } from '../core/header-base';
import { LayoutSection } from '../core/layout-section';
import { navData as mainNavData } from '../config-nav-main';

import type { NavMainProps } from './nav/types';

// ----------------------------------------------------------------------

export type MainLayoutProps = {
  sx?: SxProps<Theme>;
  children: React.ReactNode;
  data?: {
    nav?: NavMainProps['data'];
  };
};

export function MainLayout({ sx, data, children }: MainLayoutProps) {
  const theme = useTheme();

  const pathname = usePathname();

  const mobileNavOpen = useBoolean();

  const homePage = pathname === '/';

  const layoutQuery: Breakpoint = 'md';

  const navData = data?.nav ?? mainNavData;

  return (
    <>
      <NavMobile data={navData} open={mobileNavOpen.value} onClose={mobileNavOpen.onFalse} />
      <div
        style={{
          backgroundColor: '#1a1a1a',
        }}
      >
        <LayoutSection
          /** **************************************
           * Header
           *************************************** */
          headerSection={
            <HeaderBase
              layoutQuery={layoutQuery}
              onOpenNav={mobileNavOpen.onTrue}
              slotsDisplay={{
                account: false,
                helpLink: false,
                contacts: false,
                searchbar: false,
                workspaces: false,
                localization: false,
                notifications: false,
              }}
              sx={{
                // backgroundColor: '#1a1a1a',
                backgroundColor: 'transparent',
              }}
              slots={{
                topArea: (
                  <Alert severity="info" sx={{ display: 'none', borderRadius: 0 }}>
                    This is an info Alert.
                  </Alert>
                ),
                rightAreaStart: (
                  <>
                    <NavDesktop
                      data={navData}
                      sx={{
                        display: 'none',
                        [theme.breakpoints.up(layoutQuery)]: { mr: 2.5, display: 'flex' },
                      }}
                    />
                    <Logo
                      data-slot="logo"
                      sx={{
                        [theme.breakpoints.up(layoutQuery)]: { display: 'none' },
                      }}
                    />
                  </>
                ),
              }}
            />
          }
          /** **************************************
           * Footer
           *************************************** */
          footerSection={<HomeFooter />}
          /** **************************************
           * Style
           *************************************** */
          sx={sx}
        >
          <Main sx={{ backgroundColor: 'black' }}>{children}</Main>
        </LayoutSection>
      </div>
    </>
  );
}

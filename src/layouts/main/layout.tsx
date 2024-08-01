import type { Theme, SxProps, Breakpoint } from '@mui/material/styles';

import { useMemo } from 'react';

import Alert from '@mui/material/Alert';
import { useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';
import { usePathname } from 'src/routes/hooks';

import { useBoolean } from 'src/hooks/use-boolean';
import { useResponsive } from 'src/hooks/use-responsive';
import { useScrollOffSetTop } from 'src/hooks/use-scroll-offset-top';

import { Logo } from 'src/components/logo';
import { NavSectionHorizontal } from 'src/components/nav-section';

import { useCategoryContext } from 'src/sections/@landing/_common/category-context';

import { Main } from './main';
import { HomeFooter } from './footer';
import { NavMobile } from './nav/mobile';
import { HeaderBase } from '../core/header-base';
import { LayoutSection } from '../core/layout-section';
import { LandingSearch } from '../components/landing-search';

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
  const {
    categoryList: { list: categoriesData },
  } = useCategoryContext();

  const theme = useTheme();

  const pathname = usePathname();

  const mobileNavOpen = useBoolean();

  const homePage = pathname === '/';

  const { offsetTop } = useScrollOffSetTop(homePage ? 200 : 0);

  const layoutQuery: Breakpoint = 'md';

  const navData = useMemo(() => {
    const nav = [{ title: 'Trang chủ', path: '/' }] as any;
    const desktop = [
      {
        items: [
          {
            title: 'Trang chủ',
            path: '/',
          },
        ],
      },
    ] as any;
    categoriesData.forEach((category, index) => {
      nav.push({
        title: category.name,
        path: paths.landing.product.category(category.name),
        children: [
          {
            subheader: '',
            items: [],
          },
        ],
      });
      desktop.push({
        items: [
          {
            title: category.name,
            path: paths.landing.product.category(category.name),
            children: [],
          },
        ],
      });
      category.categories.forEach((subCategory) => {
        nav[index + 1].children[0].items.push({
          title: subCategory.name,
          path: paths.landing.product.subCategory(category.name, subCategory.name),
        });
        desktop[index + 1].items[0].children.push({
          title: subCategory.name,
          path: paths.landing.product.subCategory(category.name, subCategory.name),
        });
      });
    });
    return {
      mobile: nav,
      desktop,
    };
  }, [categoriesData]);

  const mdUp = useResponsive('up', layoutQuery);

  return (
    <>
      <NavMobile data={navData.mobile} open={mobileNavOpen.value} onClose={mobileNavOpen.onFalse} />

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
                contacts: false,
                searchbar: false,
                workspaces: false,
              }}
              logoProps={{
                size: 60,
              }}
              slotProps={{
                container: {
                  sx: {},
                },
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
                    {mdUp && (
                      <NavSectionHorizontal
                        data={navData.desktop}
                        enabledRootRedirect
                        cssVars={{
                          '--nav-item-gap': '4px',
                          '--nav-item-radius': '2px',
                          '--nav-item-color': offsetTop
                            ? '#ddd'
                            : theme.vars.palette.text.secondary,
                          '--nav-item-hover-color': theme.vars.palette.primary.lighter,
                          '--nav-item-hover-bg': offsetTop
                            ? theme.vars.palette.primary.main
                            : theme.vars.palette.primary.dark,

                          '--nav-item-root-active-color': offsetTop
                            ? theme.vars.palette.primary.lighter
                            : theme.vars.palette.primary.main,
                          // '--nav-item-root-active-bg': offsetTop
                          //   ? theme.vars.palette.primary.darker
                          //   : theme.vars.palette.primary.dark,

                          '--nav-item-root-open-bg': theme.vars.palette.primary.light,
                          '--nav-item-root-open-color': 'white',

                          '--nav-item-sub-open-color': 'white',
                          '--nav-item-sub-open-bg': theme.vars.palette.primary.light,

                          '--nav-item-sub-active-color': '#ddd',
                          '--nav-item-sub-active-bg': theme.vars.palette.primary.darker,
                        }}
                        sx={{
                          display: 'flex',
                          '& .mnl__nav__ul': {
                            height: 1,
                          },
                          '& .mnl__nav__item': {
                            height: 1,
                          },
                          '& .mnl__nav__item.state--active .mnl__nav__item__title': {
                            fontWeight: '800',
                          },
                        }}
                        slotProps={{
                          paper: { borderRadius: '2px' },
                          rootItem: {
                            sx: {
                              typography: 'subtitle1',
                              textTransform: 'uppercase',
                              fontFamily: (th) => th.typography.fontSecondaryFamily,
                            },
                            icon: {},
                            title: {
                              fontWeight: 600,
                            },
                            caption: {},
                            info: {},
                            arrow: {},
                          },
                          subItem: {
                            sx: {
                              '&:first-letter': {
                                textTransform: 'uppercase',
                              },
                              fontFamily: (th) => th.typography.fontSecondaryFamily,
                              '&:hover': { color: 'white' },
                            },
                            icon: {},
                            title: {},
                            caption: {},
                            info: {},
                            arrow: {},
                          },
                        }}
                      />
                    )}
                    {/* <Logo
                      data-slot="logo"
                      width={50}
                      height={50}
                      sx={{
                        [theme.breakpoints.up(layoutQuery)]: { display: 'none' },
                      }}
                    /> */}
                  </>
                ),
                centerArea: (
                  <Logo
                    data-slot="logo"
                    width={50}
                    height={50}
                    sx={{
                      [theme.breakpoints.up(layoutQuery)]: {
                        display: 'none',
                      },
                      ...(!offsetTop && {
                        display: 'none',
                      }),
                    }}
                  />
                ),

                rightAreaEnd: <LandingSearch offsetTop={offsetTop} theme={theme} />,
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

import type { NavSectionProps } from 'src/components/nav-section';

import { styled, useTheme } from '@mui/material/styles';

import { Logo } from 'src/components/logo';
import { MuiBox } from 'src/components/@mui/mui-box';

import { HeaderSection } from './header-section';
import { MenuButton } from '../components/menu-button';
import { AccountDrawer } from '../components/account-drawer';

import type { HeaderSectionProps } from './header-section';
import type { AccountDrawerProps } from '../components/account-drawer';

// ----------------------------------------------------------------------

const StyledDivider = styled('span')(({ theme }) => ({
  width: 1,
  height: 10,
  flexShrink: 0,
  display: 'none',
  position: 'relative',
  alignItems: 'center',
  flexDirection: 'column',
  marginLeft: theme.spacing(2.5),
  marginRight: theme.spacing(2.5),
  backgroundColor: 'currentColor',
  color: theme.vars.palette.divider,
  '&::before, &::after': {
    top: -5,
    width: 3,
    height: 3,
    content: '""',
    flexShrink: 0,
    borderRadius: '50%',
    position: 'absolute',
    backgroundColor: 'currentColor',
  },
  '&::after': { bottom: -5, top: 'auto' },
}));

// ----------------------------------------------------------------------

export type HeaderBaseProps = HeaderSectionProps & {
  onOpenNav: () => void;
  data?: {
    nav?: NavSectionProps['data'];
    account?: AccountDrawerProps['data'];
  };
  slots?: {
    navMobile?: {
      topArea?: React.ReactNode;
      bottomArea?: React.ReactNode;
    };
  };
  slotsDisplay?: {
    signIn?: boolean;
    account?: boolean;
    helpLink?: boolean;
    settings?: boolean;
    purchase?: boolean;
    contacts?: boolean;
    searchbar?: boolean;
    workspaces?: boolean;
    menuButton?: boolean;
    localization?: boolean;
    notifications?: boolean;
  };
  logoProps?: {
    size?: number;
  };
};

export function HeaderBase({
  sx,
  data,
  slots,
  slotProps,
  logoProps,
  onOpenNav,
  layoutQuery,
  slotsDisplay: {
    account = true,
    helpLink = true,
    settings = true,
    purchase = true,
    contacts = true,
    searchbar = true,
    workspaces = true,
    menuButton = true,
    localization = true,
    notifications = true,
  } = {},
  ...other
}: HeaderBaseProps) {
  const theme = useTheme();

  return (
    <HeaderSection
      sx={sx}
      layoutQuery={layoutQuery}
      slots={{
        ...slots,
        leftAreaStart: slots?.leftAreaStart,
        leftArea: (
          <>
            {slots?.leftAreaStart}

            {/* -- Menu button -- */}
            {menuButton && (
              <MenuButton
                data-slot="menu-button"
                onClick={onOpenNav}
                sx={{ mr: 1, ml: -1, [theme.breakpoints.up(layoutQuery)]: { display: 'none' } }}
              />
            )}

            {/* -- Logo -- */}
            <Logo
              data-slot="logo"
              sx={{
                [theme.breakpoints.down(layoutQuery)]: { display: 'none' },
              }}
              width={logoProps?.size}
              height={logoProps?.size}
            />

            {/* -- Divider -- */}
            <StyledDivider data-slot="divider" />

            {slots?.leftAreaEnd}
          </>
        ),
        rightArea: (
          <>
            {slots?.rightAreaStart}

            <MuiBox
              data-area="right"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: { xs: 1, sm: 1.5 },
              }}
            >
              {/* -- Account drawer -- */}
              {account && <AccountDrawer data-slot="account" data={data?.account} />}
            </MuiBox>

            {slots?.rightAreaEnd}
          </>
        ),
      }}
      slotProps={slotProps}
      {...other}
    />
  );
}

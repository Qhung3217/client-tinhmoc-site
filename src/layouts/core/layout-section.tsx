import type { Theme, SxProps, CSSObject } from '@mui/material/styles';

import GlobalStyles from '@mui/material/GlobalStyles';

import { MuiBox } from 'src/components/@mui/mui-box';

import { layoutClasses } from '../classes';

// ----------------------------------------------------------------------

export type LayoutSectionProps = {
  sx?: SxProps<Theme>;
  cssVars?: CSSObject;
  children?: React.ReactNode;
  footerSection?: React.ReactNode;
  headerSection?: React.ReactNode;
  sidebarSection?: React.ReactNode;
};

export function LayoutSection({
  sx,
  cssVars,
  children,
  footerSection,
  headerSection,
  sidebarSection,
}: LayoutSectionProps) {
  const inputGlobalStyles = (
    <GlobalStyles
      styles={{
        body: {
          '--layout-nav-zIndex': 1101,
          '--layout-nav-mobile-width': '320px',
          '--layout-header-blur': '8px',
          '--layout-header-zIndex': 1100,
          '--layout-header-mobile-height': '64px',
          '--layout-header-desktop-height': '72px',
          ...cssVars,
        },
      }}
    />
  );

  return (
    <>
      {inputGlobalStyles}

      <MuiBox id="root__layout" className={layoutClasses.root} sx={sx}>
        {sidebarSection ? (
          <>
            {sidebarSection}
            <MuiBox
              display="flex"
              flex="1 1 auto"
              flexDirection="column"
              className={layoutClasses.hasSidebar}
            >
              {headerSection}
              {children}
              {footerSection}
            </MuiBox>
          </>
        ) : (
          <>
            {headerSection}
            {children}
            {footerSection}
          </>
        )}
      </MuiBox>
    </>
  );
}

import { useState, useEffect, useCallback } from 'react';

import Collapse from '@mui/material/Collapse';

import { paths } from 'src/routes/paths';
import { isExternalLink } from 'src/routes/utils';
import { usePathname, useSearchParams } from 'src/routes/hooks';
import { useActiveLink } from 'src/routes/hooks/use-active-link';

import { CONFIG } from 'src/config-global';
import { varAlpha } from 'src/theme/styles';

import { NavLi, navSectionClasses, NavSectionVertical } from 'src/components/nav-section';

import { NavItem } from './nav-mobile-item';

import type { NavListProps } from '../types';

// ----------------------------------------------------------------------

export function NavList({ data }: NavListProps) {
  const searchParams = useSearchParams();

  const pathname = usePathname();

  const _active = useActiveLink(data.path, !!data.children);

  const [active, setActive] = useState(_active);

  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    if (pathname.startsWith(paths.landing.product.root) && searchParams.size) {
      if (searchParams.size) {
        const params = Object.fromEntries(searchParams.entries());
        const pathParams = new URLSearchParams(data.path.substring(data.path.lastIndexOf('?')));
        const category = pathParams.get('category');
        let isActive = false;
        if (category) {
          if ('category' in params && params.category === category) isActive = true;
        }
        setActive(isActive);
      } else {
        setActive(false);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const handleToggleMenu = useCallback(() => {
    if (data.children) {
      setOpenMenu((prev) => !prev);
    }
  }, [data.children]);

  const renderNavItem = (
    <NavItem
      // slots
      path={data.path}
      icon={data.icon}
      title={data.title}
      // state
      active={active}
      hasChild={!!data.children}
      open={data.children && !!openMenu}
      externalLink={isExternalLink(data.path)}
      // actions
      onClick={handleToggleMenu}
    />
  );

  if (data.children) {
    return (
      <NavLi>
        {renderNavItem}
        <Collapse in={openMenu}>
          <NavSectionVertical
            data={data.children}
            slotProps={{ rootItem: { sx: { minHeight: 36 } } }}
            sx={{
              px: 1.5,
              [`& .${navSectionClasses.item.root}`]: {
                '&[aria-label="Dashboard"]': {
                  [`& .${navSectionClasses.item.title}`]: { display: 'none' },
                  height: 180,
                  borderRadius: 1.5,
                  backgroundSize: 'auto 88%',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundImage: `url(${CONFIG.site.basePath}/assets/illustrations/illustration-dashboard.webp)`,
                  border: (theme) =>
                    `solid 1px ${varAlpha(theme.palette.grey['500Channel'], 0.12)}`,
                },
              },
            }}
          />
        </Collapse>
      </NavLi>
    );
  }

  return <NavLi>{renderNavItem}</NavLi>;
}

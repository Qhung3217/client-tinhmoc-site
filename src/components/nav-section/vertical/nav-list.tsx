import { useState, useEffect, useCallback } from 'react';

import { paths } from 'src/routes/paths';
import { isExternalLink } from 'src/routes/utils';
import { usePathname, useSearchParams } from 'src/routes/hooks';
import { useActiveLink } from 'src/routes/hooks/use-active-link';

import { NavItem } from './nav-item';
import { navSectionClasses } from '../classes';
import { NavUl, NavLi, NavCollapse } from '../styles';

import type { NavListProps, NavSubListProps } from '../types';

// ----------------------------------------------------------------------

export function NavList({ data, render, depth, slotProps, enabledRootRedirect }: NavListProps) {
  const searchParams = useSearchParams();

  const pathname = usePathname();

  const _active = useActiveLink(data.path, !!data.children);

  const [active, setActive] = useState(_active);

  const [openMenu, setOpenMenu] = useState(active);

  useEffect(() => {
    if (pathname.startsWith(paths.landing.product.root) && searchParams.size) {
      const params = Object.fromEntries(searchParams.entries());
      const pathParams = new URLSearchParams(data.path.substring(data.path.lastIndexOf('?')));
      const category = pathParams.get('category');
      const subCategory = pathParams.get('subCategory');
      let isActive = false;
      if (category && subCategory) {
        if ('category' in params && params.category === category) {
          if ('subCategory' in params && params.subCategory === subCategory) {
            isActive = true;
          }
        }
      } else if (category) {
        if ('category' in params && params.category === category) isActive = true;
      } else if (subCategory) {
        if ('subCategory' in params && params.subCategory === subCategory) {
          isActive = true;
        }
      }
      setActive(isActive);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  useEffect(() => {
    if (!active) {
      handleCloseMenu();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleToggleMenu = useCallback(() => {
    if (data.children) {
      setOpenMenu((prev) => !prev);
    }
  }, [data.children]);

  const handleCloseMenu = useCallback(() => {
    setOpenMenu(false);
  }, []);

  const renderNavItem = (
    <NavItem
      render={render}
      // slots
      path={data.path}
      icon={data.icon}
      info={data.info}
      title={data.title}
      caption={data.caption}
      // state
      depth={depth}
      active={active}
      disabled={data.disabled}
      hasChild={!!data.children}
      open={data.children && openMenu}
      externalLink={isExternalLink(data.path)}
      enabledRootRedirect={enabledRootRedirect}
      // styles
      slotProps={depth === 1 ? slotProps?.rootItem : slotProps?.subItem}
      // actions
      onClick={handleToggleMenu}
    />
  );

  // Hidden item by role
  if (data.roles && slotProps?.currentRole) {
    if (!data?.roles?.includes(slotProps?.currentRole)) {
      return null;
    }
  }

  // Has children
  if (data.children) {
    return (
      <NavLi
        disabled={data.disabled}
        sx={{
          [`& .${navSectionClasses.li}`]: {
            '&:first-of-type': { mt: 'var(--nav-item-gap)' },
          },
        }}
      >
        {renderNavItem}

        <NavCollapse data-group={data.title} in={openMenu} depth={depth} unmountOnExit mountOnEnter>
          <NavSubList
            data={data.children}
            render={render}
            depth={depth}
            slotProps={slotProps}
            enabledRootRedirect={enabledRootRedirect}
          />
        </NavCollapse>
      </NavLi>
    );
  }

  // Default
  return <NavLi disabled={data.disabled}>{renderNavItem}</NavLi>;
}

// ----------------------------------------------------------------------

function NavSubList({ data, render, depth, slotProps, enabledRootRedirect }: NavSubListProps) {
  return (
    <NavUl sx={{ gap: 'var(--nav-item-gap)' }}>
      {data.map((list) => (
        <NavList
          key={list.title}
          data={list}
          render={render}
          depth={depth + 1}
          slotProps={slotProps}
          enabledRootRedirect={enabledRootRedirect}
        />
      ))}
    </NavUl>
  );
}

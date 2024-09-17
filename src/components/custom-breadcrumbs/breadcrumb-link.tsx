import Link from '@mui/material/Link';

import { RouterLink } from 'src/routes/components';

import { MuiBox } from '../@mui/mui-box';

import type { BreadcrumbsLinkProps } from './types';

// ----------------------------------------------------------------------

type Props = {
  disabled: boolean;
  activeLast?: boolean;
  link: BreadcrumbsLinkProps;
};

export function BreadcrumbsLink({ link, activeLast, disabled }: Props) {
  const styles = {
    typography: 'body2',
    alignItems: 'center',
    color: 'text.primary',
    display: 'inline-flex',
    ...(disabled &&
      !activeLast && { cursor: 'default', pointerEvents: 'none', color: 'text.disabled' }),
  };

  const renderContent = (
    <>
      {link.icon && (
        <MuiBox
          component="span"
          sx={{
            mr: 1,
            display: 'inherit',
            '& svg, & img': {
              width: 20,
              height: 20,
            },
          }}
        >
          {link.icon}
        </MuiBox>
      )}

      {link.name}
    </>
  );

  if (link.href) {
    return (
      <Link component={RouterLink} href={link.href} sx={styles}>
        {renderContent}
      </Link>
    );
  }

  return <MuiBox sx={styles}> {renderContent} </MuiBox>;
}

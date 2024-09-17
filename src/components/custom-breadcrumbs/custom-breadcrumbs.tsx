import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import { MuiBox } from '../@mui/mui-box';
import { BreadcrumbsLink } from './breadcrumb-link';

import type { CustomBreadcrumbsProps } from './types';

// ----------------------------------------------------------------------

export function CustomBreadcrumbs({
  links,
  action,
  heading,
  moreLink,
  activeLast,
  slotProps,
  sx,
  ...other
}: CustomBreadcrumbsProps) {
  const renderHeading = (
    <Typography variant="h4" sx={{ mb: 2, ...slotProps?.heading }}>
      {heading}
    </Typography>
  );

  const renderLinks = (
    <Breadcrumbs separator={<Separator />} sx={slotProps?.breadcrumbs} {...other}>
      {links.map((link, index) => (
        <BreadcrumbsLink
          key={link.name ?? index}
          link={link}
          activeLast={activeLast}
          disabled={!activeLast && index + 1 === links.length}
        />
      ))}
    </Breadcrumbs>
  );

  const renderAction = <MuiBox sx={{ flexShrink: 0, ...slotProps?.action }}> {action} </MuiBox>;

  const renderMoreLink = (
    <MuiBox component="ul">
      {moreLink?.map((href) => (
        <MuiBox key={href} component="li" sx={{ display: 'flex' }}>
          <Link href={href} variant="body2" target="_blank" rel="noopener" sx={slotProps?.moreLink}>
            {href}
          </Link>
        </MuiBox>
      ))}
    </MuiBox>
  );

  return (
    <Stack spacing={2} sx={sx}>
      <Stack direction="row" alignItems="center">
        <MuiBox sx={{ flexGrow: 1 }}>
          {heading && renderHeading}

          {!!links.length && renderLinks}
        </MuiBox>

        {action && renderAction}
      </Stack>

      {!!moreLink && renderMoreLink}
    </Stack>
  );
}

// ----------------------------------------------------------------------

function Separator() {
  return (
    <MuiBox component="span" sx={{}}>
      /
    </MuiBox>
  );
}

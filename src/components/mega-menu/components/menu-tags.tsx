import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { MuiBox } from 'src/components/@mui/mui-box';

import type { MenuTagsProps } from '../types';

// ----------------------------------------------------------------------

export function MenuTags({ tags, ...other }: MenuTagsProps) {
  return (
    <MuiBox {...other}>
      <Typography variant="caption" sx={{ mr: 0.5, fontWeight: 'fontWeightBold' }}>
        Hot products:
      </Typography>

      {tags.map((tag, index) => (
        <Link
          key={tag.title}
          component={RouterLink}
          href={tag.path}
          variant="caption"
          sx={{
            color: 'text.secondary',
            transition: (theme) => theme.transitions.create(['color']),
            '&:hover': { color: 'text.primary' },
          }}
        >
          {index === 0 ? tag.title : `, ${tag.title} `}
        </Link>
      ))}
    </MuiBox>
  );
}

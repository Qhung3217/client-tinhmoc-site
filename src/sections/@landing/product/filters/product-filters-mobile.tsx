import type { IProductFilters } from 'src/types/product';
import type { UseSetStateReturn } from 'src/hooks/use-set-state';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { useBoolean } from 'src/hooks/use-boolean';

import { Iconify } from 'src/components/iconify';
import { Scrollbar } from 'src/components/scrollbar';

import CategoryFilter from './category-filter';

// ----------------------------------------------------------------------

type Props = {
  filters: UseSetStateReturn<IProductFilters>;
  options: any;
};

export function ProductFiltersMobile({ filters, options }: Props) {
  const open = useBoolean();
  const canReset = false;

  const renderHead = (
    <>
      <Box display="flex" alignItems="center" sx={{ py: 2, pr: 1, pl: 2.5 }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Bộ lọc
        </Typography>

        <Tooltip title="Reset">
          <IconButton onClick={filters.onResetState}>
            <Badge color="error" variant="dot" invisible={!canReset}>
              <Iconify icon="solar:restart-bold" />
            </Badge>
          </IconButton>
        </Tooltip>

        <IconButton onClick={open.onFalse}>
          <Iconify icon="mingcute:close-line" />
        </IconButton>
      </Box>

      <Divider sx={{ borderStyle: 'dashed' }} />
    </>
  );

  return (
    <>
      <Button
        disableRipple
        color="inherit"
        endIcon={
          <Badge color="error" variant="dot" invisible={!canReset}>
            <Iconify icon="ic:round-filter-list" />
          </Badge>
        }
        onClick={open.onTrue}
      >
        Bộ lọc
      </Button>

      <Drawer
        anchor="right"
        open={open.value}
        onClose={open.onFalse}
        slotProps={{ backdrop: { invisible: true } }}
        PaperProps={{ sx: { width: 320 } }}
      >
        {renderHead}

        <Scrollbar sx={{ px: 2.5, py: 3 }}>
          <Stack spacing={3}>
            <CategoryFilter
              title="Cửa gỗ"
              options={['Cửa gỗ HDF sơn', 'Cửa gỗ HDF venneer', 'Cửa vòm gỗ']}
              filters={filters}
            />
          </Stack>
        </Scrollbar>
      </Drawer>
    </>
  );
}

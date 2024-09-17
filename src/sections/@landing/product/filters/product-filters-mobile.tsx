import type { IProductFilters, IProductFilterOptions } from 'src/types/product';

import { useMemo } from 'react';

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
import { MuiBox } from 'src/components/@mui/mui-box';

import CategoryFilter from './category-filter';

// ----------------------------------------------------------------------

type Props = {
  filters: IProductFilters;
  onFilters: any;
  onReset: any;
  options: IProductFilterOptions;
};

export function ProductFiltersMobile({ filters, options, onFilters, onReset }: Props) {
  const open = useBoolean();
  const canReset = useMemo(() => !!filters.subCategory.length, [filters]);

  const renderHead = (
    <>
      <MuiBox display="flex" alignItems="center" sx={{ py: 2, pr: 1, pl: 2.5 }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Bộ lọc
        </Typography>

        <Tooltip title="Đặt lại bộ lọc">
          <IconButton onClick={onReset}>
            <Badge color="error" variant="dot" invisible={!canReset}>
              <Iconify icon="solar:restart-bold" />
            </Badge>
          </IconButton>
        </Tooltip>

        <IconButton onClick={open.onFalse}>
          <Iconify icon="mingcute:close-line" />
        </IconButton>
      </MuiBox>

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
            {options.category.map((cGroup) => (
              <CategoryFilter
                key={cGroup.title}
                title={cGroup.title}
                options={cGroup.children || []}
                filters={filters.subCategory}
                onFilters={onFilters}
              />
            ))}
          </Stack>
        </Scrollbar>
      </Drawer>
    </>
  );
}

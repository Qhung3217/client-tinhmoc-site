import type { IProductTableFilters } from 'src/types/product';
import type { SelectChangeEvent } from '@mui/material/Select';
import type { UseSetStateReturn } from 'src/hooks/use-set-state';

import { useCallback } from 'react';

import Select from '@mui/material/Select';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';

import { useSetState } from 'src/hooks/use-set-state';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { usePopover, CustomPopover } from 'src/components/custom-popover';

// ----------------------------------------------------------------------

type Props = {
  filters: UseSetStateReturn<IProductTableFilters>;
  options: {
    titles: {
      value: string;
      label: string;
    }[];
    createBys: {
      value: string;
      label: string;
    }[];
  };
};

export function ProductTableToolbar({ filters, options }: Props) {
  const popover = usePopover();

  const local = useSetState<IProductTableFilters>({
    title: filters.state.title,
    createBy: filters.state.createBy,
  });

  const handleChangetitle = useCallback(
    (event: SelectChangeEvent<string[]>) => {
      const {
        target: { value },
      } = event;

      local.setState({ title: typeof value === 'string' ? value.split(',') : value });
    },
    [local]
  );

  const handleChangecreateBy = useCallback(
    (event: SelectChangeEvent<string[]>) => {
      const {
        target: { value },
      } = event;

      local.setState({ createBy: typeof value === 'string' ? value.split(',') : value });
    },
    [local]
  );

  const handleFiltertitle = useCallback(() => {
    filters.setState({ title: local.state.title });
  }, [filters, local.state.title]);

  const handleFiltercreateBy = useCallback(() => {
    filters.setState({ createBy: local.state.createBy });
  }, [filters, local.state.createBy]);

  return (
    <>
      <FormControl sx={{ flexShrink: 0, width: { xs: 1, md: 200 } }}>
        <InputLabel htmlFor="product-filter-title-select-label">title</InputLabel>

        <Select
          multiple
          value={local.state.title}
          onChange={handleChangetitle}
          onClose={handleFiltertitle}
          input={<OutlinedInput label="title" />}
          renderValue={(selected) => selected.map((value) => value).join(', ')}
          inputProps={{ id: 'product-filter-title-select-label' }}
          sx={{ textTransform: 'capitalize' }}
        >
          {options.titles.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              <Checkbox
                disableRipple
                size="small"
                checked={local.state.title.includes(option.value)}
              />
              {option.label}
            </MenuItem>
          ))}
          <MenuItem
            onClick={handleFiltertitle}
            sx={{
              justifyContent: 'center',
              fontWeight: (theme) => theme.typography.button,
              border: (theme) =>
                `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.16)}`,
              bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.08),
            }}
          >
            Apply
          </MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ flexShrink: 0, width: { xs: 1, md: 200 } }}>
        <InputLabel htmlFor="product-filter-createBy-select-label">createBy</InputLabel>
        <Select
          multiple
          value={local.state.createBy}
          onChange={handleChangecreateBy}
          onClose={handleFiltercreateBy}
          input={<OutlinedInput label="createBy" />}
          renderValue={(selected) => selected.map((value) => value).join(', ')}
          inputProps={{ id: 'product-filter-createBy-select-label' }}
          sx={{ textTransform: 'capitalize' }}
        >
          {options.createBys.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              <Checkbox
                disableRipple
                size="small"
                checked={local.state.createBy.includes(option.value)}
              />
              {option.label}
            </MenuItem>
          ))}

          <MenuItem
            disableGutters
            disableTouchRipple
            onClick={handleFiltercreateBy}
            sx={{
              justifyContent: 'center',
              fontWeight: (theme) => theme.typography.button,
              border: (theme) =>
                `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.16)}`,
              bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.08),
            }}
          >
            Apply
          </MenuItem>
        </Select>
      </FormControl>

      <CustomPopover
        open={popover.open}
        anchorEl={popover.anchorEl}
        onClose={popover.onClose}
        slotProps={{ arrow: { placement: 'right-top' } }}
      >
        <MenuList>
          <MenuItem
            onClick={() => {
              popover.onClose();
            }}
          >
            <Iconify icon="solar:printer-minimalistic-bold" />
            Print
          </MenuItem>

          <MenuItem
            onClick={() => {
              popover.onClose();
            }}
          >
            <Iconify icon="solar:import-bold" />
            Import
          </MenuItem>

          <MenuItem
            onClick={() => {
              popover.onClose();
            }}
          >
            <Iconify icon="solar:export-bold" />
            Export
          </MenuItem>
        </MenuList>
      </CustomPopover>
    </>
  );
}

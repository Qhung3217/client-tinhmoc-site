import type { IProductTableFilters } from 'src/types/product';
import type { SelectChangeEvent } from '@mui/material/Select';
import type { UseSetStateReturn } from 'src/hooks/use-set-state';

import { useCallback } from 'react';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';

import { useSetState } from 'src/hooks/use-set-state';

import { varAlpha } from 'src/theme/styles';

// ----------------------------------------------------------------------

type Props = {
  filters: UseSetStateReturn<IProductTableFilters>;
  options: {
    categoryIds: {
      id: string;
      name: string;
    }[];
  };
};

export function ProductTableToolbar({ filters, options }: Props) {
  const local = useSetState<IProductTableFilters>({
    categoryId: filters.state.categoryId,
  });

  const handleChangeCategory = useCallback(
    (event: SelectChangeEvent<string[]>) => {
      const {
        target: { value },
      } = event;

      local.setState({ categoryId: typeof value === 'string' ? value.split(',') : value });
    },
    [local]
  );

  const handleFilterCategory = useCallback(() => {
    filters.setState({ categoryId: local.state.categoryId });
  }, [filters, local.state.categoryId]);

  return (
    <FormControl sx={{ flexShrink: 0, width: { xs: 1, md: 200 } }}>
      <InputLabel htmlFor="product-filter-title-select-label">title</InputLabel>

      <Select
        multiple
        value={local.state.categoryId}
        onChange={handleChangeCategory}
        onClose={handleFilterCategory}
        input={<OutlinedInput label="title" />}
        renderValue={(selected) => selected.map((value) => value).join(', ')}
        inputProps={{ id: 'product-filter-title-select-label' }}
        sx={{ textTransform: 'capitalize' }}
      >
        {options.categoryIds.map((option: any) => (
          <MenuItem key={option.id} value={option.id}>
            <Checkbox
              disableRipple
              size="small"
              checked={local.state.categoryId.includes(option.id)}
            />
            {option.name}
          </MenuItem>
        ))}
        <MenuItem
          onClick={handleFilterCategory}
          sx={{
            justifyContent: 'center',
            fontWeight: (theme) => theme.typography.button,
            border: (theme) => `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.16)}`,
            bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.08),
          }}
        >
          Apply
        </MenuItem>
      </Select>
    </FormControl>
  );
}

import type { ICategoryItem } from 'src/types/category';
import type { IProductTableFilters } from 'src/types/product';
import type { SelectChangeEvent } from '@mui/material/Select';
import type { UseSetStateReturn } from 'src/hooks/use-set-state';

import React, { useCallback } from 'react';

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
    categories: ICategoryItem[];
  };
};

export function ProductTableToolbar({ filters, options }: Props) {
  const local = useSetState<IProductTableFilters>({
    categories: filters.state.categories,
  });

  const handleChangeCategory = useCallback(
    (event: SelectChangeEvent<string[]>) => {
      const {
        target: { value },
      } = event;
      local.setState({ categories: typeof value === 'string' ? value.split(',') : value });
    },
    [local]
  );

  const handleFilterCategory = useCallback(() => {
    filters.setState({ categories: local.state.categories });
  }, [filters, local.state.categories]);

  const handleToggleCategory = useCallback(
    (category: string) => () => {
      const currentIndex = local.state.categories.indexOf(category);
      const newCategories = [...local.state.categories];

      if (currentIndex === -1) {
        newCategories.push(category);
      } else {
        newCategories.splice(currentIndex, 1);
      }

      local.setState({ categories: newCategories });
    },
    [local]
  );

  const categoryMenuItems: (JSX.Element | React.ReactFragment)[] = options.categories.reduce(
    (acc: (JSX.Element | React.ReactFragment)[], option) => {
      acc.push(
        <MenuItem key={option.name} value={option.name} onClick={handleToggleCategory(option.name)}>
          <Checkbox
            disableRipple
            size="small"
            checked={local.state.categories.includes(option.name)}
          />
          {option.name}
        </MenuItem>
      );
      return acc;
    },
    []
  );

  return (
    <FormControl sx={{ flexShrink: 0, width: { xs: 1, md: 200 } }}>
      <InputLabel htmlFor="product-filter-title-select-label">Loại sản phẩm</InputLabel>

      <Select
        multiple
        value={local.state.categories}
        onChange={handleChangeCategory}
        onClose={handleFilterCategory}
        input={<OutlinedInput label="Loại sản phẩm" />}
        renderValue={(selected) => selected.join(', ')}
        inputProps={{ id: 'product-filter-title-select-label' }}
        sx={{ textTransform: 'capitalize' }}
      >
        {categoryMenuItems}
        <MenuItem
          onClick={handleFilterCategory}
          sx={{
            justifyContent: 'center',
            fontWeight: (theme: any) => theme.typography.button,
            border: (theme: any) =>
              `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.16)}`,
            bgcolor: (theme: any) => varAlpha(theme.vars.palette.grey['500Channel'], 0.08),
          }}
        >
          Áp dụng
        </MenuItem>
      </Select>
    </FormControl>
  );
}

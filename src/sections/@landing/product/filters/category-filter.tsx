import { useCallback } from 'react';

import { Box, Checkbox, Typography, FormControlLabel } from '@mui/material';

type Props = {
  options: string[];
  filters: string[];
  onFilters: any;
  title: string;
};
export default function CategoryFilter({ options, filters, title, onFilters }: Props) {
  const handleFilterCategory = useCallback(
    (newValue: string, checked: boolean) => {
      const isExisted = filters.includes(newValue);
      console.log(newValue, checked, isExisted, filters, [...filters, newValue]);
      if (isExisted) {
        onFilters(
          'subCategory',
          filters.filter((f) => f !== newValue)
        );
      } else onFilters('subCategory', [...filters, newValue]);
    },
    [onFilters, filters]
  );
  return (
    <Box display="flex" flexDirection="column">
      <Typography
        variant="body1"
        sx={{ mb: 1, width: 1, backgroundColor: 'primary.dark', p: 1, fontWeight: 600 }}
      >
        {title}
      </Typography>
      {options.map((option) => (
        <FormControlLabel
          key={option}
          control={<Checkbox checked={filters.includes(option)} />}
          onChange={(event, checked) => handleFilterCategory(option, checked)}
          label={option}
        />
      ))}
    </Box>
  );
}

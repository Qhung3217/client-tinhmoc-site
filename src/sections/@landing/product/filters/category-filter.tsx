import { useCallback } from 'react';

import { Box, Radio, Typography, FormControlLabel } from '@mui/material';

type Props = {
  options: string[];
  filters: string;
  onFilters: any;
  title: string;
};
export default function CategoryFilter({ options, filters, title, onFilters }: Props) {
  const handleFilterCategory = useCallback(
    (newValue: string) => {
      onFilters('subCategory', newValue);
    },
    [onFilters]
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
          control={
            <Radio checked={filters === option} onClick={() => handleFilterCategory(option)} />
          }
          label={option}
        />
      ))}
    </Box>
  );
}

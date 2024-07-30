import type { UseSetStateReturn } from 'src/hooks/use-set-state';

import { useCallback } from 'react';

import { Box, Radio, Typography, FormControlLabel } from '@mui/material';

type Props = {
  options: string[];
  filters: UseSetStateReturn<any>;
  title: string;
};
export default function CategoryFilter({ options, filters, title }: Props) {
  const handleFilterCategory = useCallback(
    (newValue: string) => {
      filters.setState({ gender: newValue });
    },
    [filters]
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
            <Radio
              checked={filters.state.gender === option}
              onClick={() => handleFilterCategory(option)}
            />
          }
          label={option}
        />
      ))}
    </Box>
  );
}

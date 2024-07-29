import type { Theme, SxProps } from '@mui/material/styles';
import type { IProductTableFilters } from 'src/types/product';
import type { UseSetStateReturn } from 'src/hooks/use-set-state';

import { useCallback } from 'react';

import Chip from '@mui/material/Chip';

import { sentenceCase } from 'src/utils/change-case';

import { chipProps, FiltersBlock, FiltersResult } from 'src/components/filters-result';

// ----------------------------------------------------------------------

type Props = {
  totalResults: number;
  sx?: SxProps<Theme>;
  filters: UseSetStateReturn<IProductTableFilters>;
};

export function ProductTableFiltersResult({ filters, totalResults, sx }: Props) {
  const handleRemoveCategories = useCallback(
    (inputValue: string) => {
      const newValue = filters.state.categories.filter((item) => item !== inputValue);

      filters.setState({ categories: newValue });
    },
    [filters]
  );

  return (
    <FiltersResult totalResults={totalResults} onReset={filters.onResetState} sx={sx}>
      <FiltersBlock label="title:" isShow={!!filters.state.categories.length}>
        {filters.state.categories.map((item) => (
          <Chip
            {...chipProps}
            key={item}
            label={sentenceCase(item)}
            onDelete={() => handleRemoveCategories(item)}
          />
        ))}
      </FiltersBlock>
    </FiltersResult>
  );
}

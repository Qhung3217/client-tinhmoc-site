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
  const handleRemoveTitle = useCallback(
    (inputValue: string) => {
      const newValue = filters.state.title.filter((item) => item !== inputValue);

      filters.setState({ title: newValue });
    },
    [filters]
  );

  const handleRemoveCreateBy = useCallback(
    (inputValue: string) => {
      const newValue = filters.state.createBy.filter((item) => item !== inputValue);

      filters.setState({ createBy: newValue });
    },
    [filters]
  );

  return (
    <FiltersResult totalResults={totalResults} onReset={filters.onResetState} sx={sx}>
      <FiltersBlock label="title:" isShow={!!filters.state.title.length}>
        {filters.state.title.map((item) => (
          <Chip
            {...chipProps}
            key={item}
            label={sentenceCase(item)}
            onDelete={() => handleRemoveTitle(item)}
          />
        ))}
      </FiltersBlock>

      <FiltersBlock label="createBy:" isShow={!!filters.state.createBy.length}>
        {filters.state.createBy.map((item) => (
          <Chip
            {...chipProps}
            key={item}
            label={sentenceCase(item)}
            onDelete={() => handleRemoveCreateBy(item)}
          />
        ))}
      </FiltersBlock>
    </FiltersResult>
  );
}

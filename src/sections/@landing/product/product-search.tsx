import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = {
  query: string;
  loading?: boolean;
  onSearch: (inputValue: string) => void;
};

export function ProductSearch({ query, onSearch, loading }: Props) {
  return (
    <TextField
      fullWidth
      sx={{
        maxWidth: 500,
      }}
      autoComplete="off"
      value={query}
      onChange={(event) => {
        onSearch(event.target.value);
      }}
      size="small"
      placeholder="Tìm kiếm..."
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Iconify icon="eva:search-fill" sx={{ ml: 1, color: 'text.disabled' }} />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            {loading ? <Iconify icon="svg-spinners:8-dots-rotate" /> : null}

            {!loading && query ? (
              <Iconify
                icon="lets-icons:close-square-fill"
                onClick={() => onSearch('')}
                sx={{
                  cursor: 'pointer',
                }}
              />
            ) : null}
          </InputAdornment>
        ),
      }}
    />
  );
}

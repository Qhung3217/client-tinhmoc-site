import type { Theme } from '@mui/material/styles';

import { useState, useEffect, useCallback } from 'react';

import { Box, Button, TextField, IconButton, Autocomplete } from '@mui/material';

import { paths } from 'src/routes/paths';

import { useBoolean } from 'src/hooks/use-boolean';
import { useDebounce } from 'src/hooks/use-debounce';
import useQueryParams from 'src/hooks/use-query-params';

import { Iconify } from 'src/components/iconify';
import { SearchNotFound } from 'src/components/search-not-found';
import { usePopover, CustomPopover } from 'src/components/custom-popover';

type Props = {
  offsetTop: boolean;
  theme: Theme;
};
const VIEW_MORE_VALUE = '$to-page$';
export default function LandingSearch({ offsetTop, theme }: Props) {
  const { searchParams, updateParams, getParam, getParams } = useQueryParams(
    paths.landing.product.root
  );
  const [query, setQuery] = useState<any>('');
  const isFocus = useBoolean();
  const queryDebounce = useDebounce(query, 400);

  const popover = usePopover();

  const handleClick = useCallback(() => {
    const currentParams = getParams(['subject', 'category']);
    const newParams = [['q', query]];
    if (currentParams.subject) {
      newParams.push(['subject', currentParams.subject]);
    }
    if (currentParams.category) {
      newParams.push(['category', currentParams.category]);
    }
    updateParams([['q', query]]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  useEffect(() => {
    const q = getParam('q');

    setQuery(q || '');

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        handleClick();
      }
    };

    if (isFocus.value) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocus]);

  const handleToDetail = (slug: string) => {
    if (slug === VIEW_MORE_VALUE) handleClick();
    else updateParams([['chi-tiet', slug]]);
  };
  return (
    <>
      <IconButton onClick={popover.onOpen}>
        <Iconify
          icon="fa-solid:search"
          color={offsetTop ? '#ddd' : theme.vars.palette.text.secondary}
        />
      </IconButton>
      <CustomPopover
        open={popover.open}
        anchorEl={popover.anchorEl}
        onClose={popover.onClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        slotProps={{
          paper: {
            sx: { width: { xs: 1, sm: 340 } },
          },
        }}
      >
        <Autocomplete
          freeSolo
          fullWidth
          autoHighlight
          // loading={loading}
          //   onChange={(event, newValue) => {
          //     handleToDetail(newValue.value);
          //   }}
          disableClearable
          filterOptions={(x) => x}
          getOptionDisabled={(option) => option.label === 'Không tìm thấy sản phẩm'}
          //   options={options}
          noOptionsText={<SearchNotFound query={query} />}
          options={[
            {
              label: 'a',
              value: 'sa',
            },
          ]}
          size="small"
          renderOption={(props, option) =>
            option.value === VIEW_MORE_VALUE ? (
              <Box component="li" {...props}>
                <Button
                  fullWidth
                  variant="text"
                  color="primary"
                  sx={{
                    justifyContent: 'center!important',
                    py: 1,
                  }}
                  onClick={handleClick}
                >
                  {option.label}
                </Button>
              </Box>
            ) : (
              <Box
                component="li"
                {...props}
                sx={{
                  transition: (t) =>
                    t.transitions.create('all', {
                      duration: 200,
                      delay: 0,
                    }),
                  '&:hover': {
                    backgroundColor: `${theme.palette.primary.main}!important`,
                    color: 'white',
                  },
                }}
              >
                {option.label}
              </Box>
            )
          }
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth
              onFocus={isFocus.onTrue}
              onBlur={isFocus.onFalse}
              variant="outlined"
              placeholder="Tìm kiếm sản phẩm..."
              onChange={(event) => {
                setQuery(event.target.value);
              }}
              InputProps={{
                ...params.InputProps,
                type: 'search',
                sx: {},
                endAdornment: (
                  <IconButton onClick={handleClick} disabled={!query} sx={{ flexShrink: 0 }}>
                    {/* {!productsLoading && (
                      <Iconify icon="carbon:search" sx={{ color: 'text.disabled' }} />
                    )}
                    {productsLoading && (
                      <Iconify icon="eos-icons:loading" sx={{ color: 'text.disabled' }} />
                    )} */}
                    <Iconify icon="carbon:search" sx={{ color: 'text.disabled' }} />
                  </IconButton>
                ),
              }}
            />
          )}
          value={query}
          defaultValue={searchParams.get('q')?.toString()}
          sx={{ mr: 1, fontWeight: 'fontWeightBold', maxWidth: 350 }}
        />
      </CustomPopover>
    </>
  );
}

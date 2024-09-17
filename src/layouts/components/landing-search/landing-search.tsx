import type { Theme } from '@mui/material/styles';

import { uniqueId } from 'lodash';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import { useRef, useMemo, useState, useEffect, useCallback } from 'react';

import { Button, TextField, IconButton, Typography, Autocomplete } from '@mui/material';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { useBoolean } from 'src/hooks/use-boolean';
import useQueryParams from 'src/hooks/use-query-params';

import { useSearchProducts } from 'src/actions/product';

import { Iconify } from 'src/components/iconify';
import { MuiBox } from 'src/components/@mui/mui-box';
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

  const { push } = useRouter();

  const [query, setQuery] = useState<string>('');

  const isFocus = useBoolean();

  const [queryDebounce, setQueryDebounce] = useState(query);

  const popover = usePopover();

  const searchInputRef = useRef<any>();

  const { data, productsLoading, productsEmpty } = useSearchProducts(
    isFocus.value && queryDebounce ? queryDebounce : null
  );

  useEffect(() => {
    const id = setTimeout(() => {
      setQueryDebounce(query);
    }, 400);
    return () => clearTimeout(id);
  }, [query]);

  const options: any = useMemo(() => {
    if (!queryDebounce && productsEmpty) return [];

    if (productsEmpty)
      return [
        {
          value: uniqueId(),
          label: 'Không tìm thấy sản phẩm',
        },
      ];
    const result = data.products.map((product) => ({
      value: product.slug,
      label: product.title,
    }));

    result.push({
      value: VIEW_MORE_VALUE,
      label: 'Xem thêm...',
    });
    return result;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, productsEmpty]);

  const handleClick = useCallback(() => {
    const currentParams = getParams(['category']);
    const newParams = [['q', query]];

    if (currentParams.category) {
      newParams.push(['category', currentParams.category]);
    }
    updateParams(newParams);

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

    if (popover.open) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [popover]);

  const handleToDetail = (slug: string) => {
    if (slug === VIEW_MORE_VALUE) handleClick();
    else push(paths.landing.product.details(slug));
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
        onTransitionEnd={() => {
          searchInputRef.current?.focus();
        }}
      >
        <Autocomplete
          freeSolo
          fullWidth
          loading={productsLoading}
          onChange={(event, newValue: any) => {
            handleToDetail(newValue.value);
          }}
          disableClearable
          filterOptions={(x) => x}
          getOptionDisabled={(option) => option.label === 'Không tìm thấy sản phẩm'}
          options={options}
          size="small"
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth
              inputRef={searchInputRef}
              onFocus={isFocus.onTrue}
              onBlur={isFocus.onFalse}
              variant="outlined"
              placeholder="Tìm kiếm sản phẩm..."
              // onChange={(event) => {
              //   setQuery(event.target.value);
              // }}
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
          onInputChange={(event, value) => {
            setQuery(value);
          }}
          renderOption={(props, option, { inputValue }) => {
            const matches = match(option.label, inputValue);
            const parts = parse(option.label, matches);

            return option.value === VIEW_MORE_VALUE ? (
              <MuiBox component="li" {...props}>
                <Button
                  fullWidth
                  variant="text"
                  color="primary"
                  size="small"
                  sx={{
                    justifyContent: 'center!important',
                    py: 1,
                  }}
                  onClick={handleClick}
                >
                  {option.label}
                </Button>
              </MuiBox>
            ) : (
              <MuiBox component="li" {...props} onClick={handleClick} key={option.value}>
                <div key={inputValue}>
                  {parts.map((part, index) => (
                    <Typography
                      key={index}
                      component="span"
                      color={part.highlight ? 'primary' : 'textPrimary'}
                      sx={{
                        typography: 'body2',
                        fontWeight: part.highlight ? 'fontWeightSemiBold' : 'fontWeightMedium',
                      }}
                    >
                      {part.text}
                    </Typography>
                  ))}
                </div>
              </MuiBox>
            );
          }}
        />
      </CustomPopover>
    </>
  );
}

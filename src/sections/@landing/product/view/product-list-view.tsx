import type { Theme } from '@mui/material/styles';
import type { IProductFilters, IProductFilterOptions } from 'src/types/product';

import { isEqual } from 'lodash';
import { useMemo, useState, useEffect, useCallback } from 'react';

import Stack from '@mui/material/Stack';
import { Link, Button } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useDebounce } from 'src/hooks/use-debounce';
import useWatchParams from 'src/hooks/use-watch-params';
import useQueryParams from 'src/hooks/use-query-params';
import { useResponsive } from 'src/hooks/use-responsive';

import { useGetProducts } from 'src/actions/product';

import { Grid } from 'src/components/Grid/mui';
import { Scrollbar } from 'src/components/scrollbar';
import { MuiBox } from 'src/components/@mui/mui-box';
import { EmptyContent } from 'src/components/empty-content';

import ProductList from '../product-list';
import { ProductSort } from '../product-sort';
import { ProductSearch } from '../product-search';
import { PRODUCT_SORT_OPTIONS } from '../@constant';
import CategoryFilter from '../filters/category-filter';
import { useCategoryContext } from '../../_common/category-context';
import { ProductFiltersMobile } from '../filters/product-filters-mobile';

// ----------------------------------------------------------------------

const DF_FILTERS = {
  category: '',
  subCategory: [],
  sort: PRODUCT_SORT_OPTIONS[0].value,
};

export default function ProductListView() {
  const {
    categoryList: { list: categoriesData },
    categoryCountData: { list: categoryCountData },
  } = useCategoryContext();

  const { updateParams, updateParam } = useQueryParams(paths.landing.product.root);

  const [sortBy, setSortBy] = useState(DF_FILTERS.sort);

  const { category, subCategory, p, q } = useWatchParams(['category', 'subCategory', 'p', 'q']);

  const smUp = useResponsive('up', 'sm');

  const [searchQuery, setSearchQuery] = useState(() => q || '');

  const searchDebounce = useDebounce(searchQuery, 400);

  const [page, setPage] = useState(() => (p ? Number(p) : 1));

  const [filters, setFilters] = useState<IProductFilters>(() => ({
    ...DF_FILTERS,
    category: category || '',
    subCategory: subCategory ? subCategory.split(',') : [],
  }));

  useEffect(() => {
    if (
      category &&
      subCategory &&
      category !== filters.category &&
      !isEqual(subCategory, filters.subCategory)
    ) {
      setFilters({
        ...filters,
        subCategory: subCategory.split(','),
        category: category || '',
      });

      setPage(1);
      return;
    }
    if (category && category !== filters.category) {
      setFilters({
        ...filters,
        category: category || '',
      });
      setPage(1);
      return;
    }
    if (subCategory && !isEqual(subCategory, filters.subCategory)) {
      setFilters({
        ...filters,
        subCategory: subCategory.split(','),
      });
      setPage(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, subCategory]);

  const onFilter = useCallback(
    (key: keyof IProductFilters, value: any) => {
      setFilters((prev) => ({
        ...prev,
        [key]: value,
      }));
    },
    [setFilters]
  );

  useEffect(() => {
    updateParams({
      ...(filters.category && {
        category: filters.category.toString(),
      }),
      ...(filters.subCategory.length && {
        subCategory: filters.subCategory.join(','),
      }),
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  const { data, productsLoading, productsEmpty } = useGetProducts(
    20,
    page - 1,
    searchDebounce,
    filters.subCategory.length ? filters.subCategory : [filters.category || ''],
    sortBy
  );

  const categoryCountList = useMemo(() => {
    const other = categoryCountData.filter((cate) => cate.level === 1);

    const all = {
      id: 'all',
      name: 'Tất cả',
      count: other.reduce((total, item) => total + item.count, 0),
    };
    return [all, ...other];
  }, [categoryCountData]);

  const options = useMemo<IProductFilterOptions>(() => {
    const result: IProductFilterOptions = {
      category: [
        {
          title: '',
          children: [],
        },
      ],
    };
    if (filters.category) {
      const currentCate = categoriesData.find((cate) => cate.name === filters.category);
      if (currentCate) {
        result.category[0].title = currentCate.name;
        result.category[0].children = currentCate.categories.map((ct) => ct.name);
      }
    } else {
      result.category = categoriesData.map((c) => ({
        title: c.name,
        children: c.categories.map((ct) => ct.name),
      }));
    }

    return result;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoriesData, filters.category, filters.subCategory]);

  const handleSortBy = useCallback((newValue: string) => {
    setSortBy(newValue);
  }, []);

  const handleSearch = useCallback((inputValue: string) => {
    setSearchQuery(inputValue);
  }, []);

  const handleReset = useCallback(
    (toCate?: string) => {
      if (toCate || filters.category)
        setFilters({
          ...DF_FILTERS,
          category: ((toCate ?? null) !== null ? toCate : filters.category) || '',
        });
      else setFilters(DF_FILTERS);
    },
    [filters.category]
  );

  useEffect(() => {
    updateParam('q', searchDebounce);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchDebounce]);

  const renderFilters = (
    <Stack
      spacing={3}
      justifyContent="space-between"
      alignItems={{ xs: 'flex-end', sm: 'center' }}
      direction={{ xs: 'column', sm: 'row' }}
    >
      <ProductSearch query={searchQuery} onSearch={handleSearch} loading={productsLoading} />

      <Stack direction="row" spacing={1} flexShrink={0}>
        {!smUp && (
          <ProductFiltersMobile
            options={options}
            filters={filters}
            onFilters={onFilter}
            onReset={() => handleReset()}
          />
        )}
        <ProductSort sort={sortBy} onSort={handleSortBy} sortOptions={PRODUCT_SORT_OPTIONS} />
      </Stack>
    </Stack>
  );
  const renderNotFound = (
    <EmptyContent filled sx={{ py: 10 }} title="Sản phẩm đang được cập nhật" />
  );

  return (
    <>
      <MuiBox
        sx={{
          backgroundColor: (theme: Theme) => theme.palette.background.neutral,
          // backgroundColor: '#28323d',
          py: { xs: 3, md: 5 },
        }}
      >
        <Container>
          <Typography variant="h3" sx={{ mb: { xs: 3, md: 5 } }}>
            {filters.category}
          </Typography>
          <Scrollbar fillContent>
            <Stack direction="row" spacing={3} minWidth={0} maxWidth={1} width={1}>
              {categoryCountList.map((c) => (
                <MuiBox key={c.id} minWidth="fit-content">
                  <CategoryLink
                    title={c.name}
                    href={
                      c.id === 'all'
                        ? paths.landing.product.root
                        : paths.landing.product.category(c.name)
                    }
                    onClick={() => {
                      if (c.id === 'all') handleReset('');
                      else handleReset(c.name);
                    }}
                    active={c.id === 'all' && !category ? true : c.name === category}
                  />
                  <Typography variant="caption" sx={{}}>
                    {c.count} sản phẩm
                  </Typography>
                </MuiBox>
              ))}
            </Stack>
          </Scrollbar>
        </Container>
      </MuiBox>
      <Container sx={{ mb: 15, mt: 3 }}>
        <Grid container>
          <Grid
            xs={0}
            sm={4}
            md={3}
            sx={{
              ...(!smUp && { display: 'none' }),
            }}
          >
            <Stack
              spacing={3}
              sx={{
                pr: 2,
                position: 'sticky',
                top: 80,
                maxHeight: 'calc(100vh - var(--layout-header-desktop-height) *1.5)',
              }}
            >
              <Scrollbar
                fillContent
                slotProps={{
                  content: {
                    pl: '8px !important',
                  },
                }}
              >
                {options.category.map((cGroup) => (
                  <CategoryFilter
                    key={cGroup.title}
                    title={cGroup.title}
                    options={cGroup.children || []}
                    filters={filters.subCategory}
                    onFilters={onFilter}
                  />
                ))}
              </Scrollbar>
              <Button color="primary" variant="soft" onClick={() => handleReset()}>
                Đặt lại bộ lọc
              </Button>
            </Stack>
          </Grid>
          <Grid xs={12} sm={8} md={9}>
            <Stack spacing={2.5} sx={{ mb: { xs: 3, md: 5 } }}>
              {renderFilters}
            </Stack>

            {productsEmpty && renderNotFound}

            <ProductList
              products={data.products}
              loading={productsLoading}
              totalPages={data.paginate.pageCount}
              onPageChange={(pg) => setPage(pg)}
              currentPage={page}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

type CategoryLinkProps = {
  title: string;
  href: string;
  onClick: any;
  active: boolean;
};
function CategoryLink({ title, href, onClick, active }: CategoryLinkProps) {
  return (
    <Link
      component={RouterLink}
      href={href}
      sx={{
        textDecoration: 'none',
      }}
      onClick={onClick}
    >
      <Typography
        variant="subtitle1"
        sx={{
          textTransform: 'uppercase',
          transition: (theme) => theme.transitions.create('textDecoration'),
          '&:hover': {
            textDecoration: 'underline',
            color: 'primary.main',
          },
          ...(active && {
            textDecoration: 'underline',
            color: 'primary.main',
          }),
        }}
      >
        {title}
      </Typography>
    </Link>
  );
}

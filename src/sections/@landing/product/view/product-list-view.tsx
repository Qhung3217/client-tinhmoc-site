import type { Theme } from '@mui/material/styles';
import type { IProductFilters, IProductFilterOptions } from 'src/types/product';

import { useMemo, useState, useEffect, useCallback } from 'react';

import { Link } from '@mui/material';
import Stack from '@mui/material/Stack';
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
import { MuiBox } from 'src/components/@mui/mui-box';
import { Scrollbar } from 'src/components/scrollbar';
import { EmptyContent } from 'src/components/empty-content';

import ProductList from '../product-list';
import { PRODUCT_SORT_OPTIONS } from '../@constant';
import { useCategoryContext } from '../../_common/category-context';

// ----------------------------------------------------------------------

const DF_FILTERS = {
  category: '',

  sort: PRODUCT_SORT_OPTIONS[0].value,
};

export default function ProductListView() {
  const {
    categoryList: { list: categoriesData },
  } = useCategoryContext();

  const { updateParams, updateParam } = useQueryParams(paths.landing.product.root);

  const { category, p, q } = useWatchParams(['category', 'p', 'q']);

  const smUp = useResponsive('up', 'sm');

  const [searchQuery, setSearchQuery] = useState(() => q || '');

  const searchDebounce = useDebounce(searchQuery, 400);

  const [page, setPage] = useState(() => (p ? Number(p) : 1));

  const [filters, setFilters] = useState<IProductFilters>(() => ({
    ...DF_FILTERS,
    category: category || '',
  }));

  useEffect(() => {
    if (category && category !== filters.category) {
      setFilters({
        ...filters,
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
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

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
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  const { data, productsLoading, productsEmpty } = useGetProducts(10, page - 1, searchDebounce, [
    filters.category || '',
  ]);

  const options = useMemo<IProductFilterOptions>(
    () => ({
      category: [
        { label: 'Tất cả', value: 'all' },
        ...categoriesData.map((c) => ({ label: c.name, value: c.id })),
      ],
    }),
    [categoriesData]
  );

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
      {/* <ProductSearch query={searchQuery} onSearch={handleSearch} loading={productsLoading} /> */}
    </Stack>
  );
  const renderNotFound = (
    <EmptyContent filled sx={{ py: 10, maxHeight: 400 }} title="Sản phẩm đang được cập nhật" />
  );

  return (
    <>
      <MuiBox
        sx={{
          py: { xs: 6, md: 8 },
          // backgroundColor: '#1a1a1a',
          background:
            'url(https://images.unsplash.com/photo-1662557499772-2c613eddadd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) no-repeat center',
          backgroundSize: {
            xs: 'cover',
            sm: 'unset',
          },
          position: 'relative',
          '&::before': {
            content: "''",
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(45deg, rgba(0,0,0,0.5046393557422969) 19%, rgba(0,0,0,0) 100%)',
          },
        }}
      >
        <Container
          sx={{
            alignContent: 'flex-end',
            minHeight: 150,
            position: 'relative',
            zIndex: 2,
          }}
        >
          <Typography variant="h1" sx={{ color: 'primary.main' }}>
            {filters.category || 'Tất cả'}
          </Typography>
        </Container>
      </MuiBox>
      <MuiBox
        sx={{
          background: 'url(assets/landing/about/bg-intro-2.jpg) no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            mb: 15,
            mt: 3,
            maxWidth: 1300,
          }}
        >
          <Grid container>
            <Grid xs={12} md={3}>
              <Stack
                spacing={2}
                sx={{
                  mt: 5,
                  p: 1,
                  pr: 2,
                  pl: 0,
                  backgroundColor: '#1a1a1acc',
                  position: 'sticky',
                  top: 80,
                  maxHeight: 'calc(100vh - var(--layout-header-desktop-height) *1.5)',
                  borderRadius: 0.2,
                  width: { xs: 1, md: '90%' },
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
                    <MuiBox key={cGroup.value} minWidth="fit-content" sx={{ pb: 2 }}>
                      <CategoryLink
                        title={cGroup.label}
                        href={
                          cGroup.value === 'all'
                            ? paths.landing.product.root
                            : paths.landing.product.category(cGroup.label)
                        }
                        onClick={() => {
                          if (cGroup.value === 'all') handleReset('');
                          else handleReset(cGroup.label);
                          window.scrollTo(0, 0);
                        }}
                        active={
                          cGroup.value === 'all' && !category ? true : cGroup.label === category
                        }
                      />
                    </MuiBox>
                  ))}
                </Scrollbar>
              </Stack>
            </Grid>
            <Grid xs={12} md={9}>
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
      </MuiBox>
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
        variant="body1"
        sx={{
          textTransform: 'Capitalize',
          transition: (theme: Theme) => theme.transitions.create('textDecoration'),
          pl: 1,
          borderLeftWidth: 4,
          borderLeftStyle: 'solid',
          borderLeftColor: 'transparent',
          '&:hover': {
            textDecoration: 'underline',
            color: 'primary.main',
            borderLeftColor: 'currentColor',
          },
          ...(active && {
            textDecoration: 'underline',
            color: 'primary.main',
            borderLeftColor: 'currentColor',
          }),
        }}
      >
        {title}
      </Typography>
    </Link>
  );
}

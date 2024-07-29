import type { IProductFilters } from 'src/types/product';

import { useState, useCallback } from 'react';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { Box, Grid, Link } from '@mui/material';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';
import { usePathname, useActiveLink } from 'src/routes/hooks';

import { useDebounce } from 'src/hooks/use-debounce';
import { useSetState } from 'src/hooks/use-set-state';

import { useSearchProducts } from 'src/actions/product';

import { Scrollbar } from 'src/components/scrollbar';

import ProductList from '../product-list';
import { ProductSort } from '../product-sort';
import { ProductSearch } from '../product-search';
import { PRODUCT_SORT_OPTIONS } from '../@constant';
import CategoryFilter from '../filters/category-filter';

// ----------------------------------------------------------------------
const CATEGORIES = [
  {
    title: 'Cửa gỗ',
    total: 100,
  },
  {
    title: 'Cửa nhựa',
    total: 20,
  },
  {
    title: 'Cửa thép vân gỗ',
    total: 30,
  },
  {
    title: 'Cửa chóng cháy',
    total: 14,
  },
  {
    title: 'Bàn ghế',
    total: 57,
  },
];

export default function ProductListView() {
  const [sortBy, setSortBy] = useState('featured');

  const [searchQuery, setSearchQuery] = useState('');

  const pathname = usePathname();

  const active = useActiveLink(pathname, true);

  const debouncedQuery = useDebounce(searchQuery);

  const filters = useSetState<IProductFilters>({
    gender: [],
    colors: [],
    rating: '',
    category: 'all',
    priceRange: [0, 200],
  });

  const { searchResults, searchLoading } = useSearchProducts(debouncedQuery);

  const handleSortBy = useCallback((newValue: string) => {
    setSortBy(newValue);
  }, []);

  const handleSearch = useCallback((inputValue: string) => {
    setSearchQuery(inputValue);
  }, []);

  // const productsEmpty = !loading && !products.length;

  const renderFilters = (
    <Stack
      spacing={3}
      justifyContent="space-between"
      alignItems={{ xs: 'flex-end', sm: 'center' }}
      direction={{ xs: 'column', sm: 'row' }}
    >
      <ProductSearch
        query={debouncedQuery}
        results={searchResults}
        onSearch={handleSearch}
        loading={searchLoading}
      />

      <Stack direction="row" spacing={1} flexShrink={0}>
        <ProductSort sort={sortBy} onSort={handleSortBy} sortOptions={PRODUCT_SORT_OPTIONS} />
      </Stack>
    </Stack>
  );

  return (
    <>
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.background.neutral,
          py: { xs: 3, md: 5 },
        }}
      >
        <Container>
          <Typography variant="h3" sx={{ mb: { xs: 3, md: 5 } }}>
            [Cửa gỗ]
          </Typography>
          <Stack direction="row" spacing={3}>
            {CATEGORIES.map((category) => (
              <Box key={category.title}>
                <CategoryLink title={category.title} href="/san-pham" />
                <Typography variant="caption" sx={{}}>
                  {category.total} sản phẩm
                </Typography>
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>
      <Container sx={{ mb: 15, mt: 3 }}>
        <Grid container>
          <Grid xs={0} sm={4} md={3}>
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
                <CategoryFilter
                  title="Cửa gỗ"
                  options={['Cửa gỗ HDF sơn', 'Cửa gỗ HDF venneer', 'Cửa vòm gỗ']}
                  filters={filters}
                />
              </Scrollbar>
            </Stack>
          </Grid>
          <Grid xs={12} sm={8} md={9}>
            <Stack spacing={2.5} sx={{ mb: { xs: 3, md: 5 } }}>
              {renderFilters}
            </Stack>

            {/* {(notFound || productsEmpty) && renderNotFound} */}

            <ProductList />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

type CategoryLinkProps = {
  title: string;
  href: string;
};
const CategoryLink = ({ title, href }: CategoryLinkProps) => {
  const active = useActiveLink(href, true);
  return (
    <Link
      component={RouterLink}
      href={href}
      sx={{
        textDecoration: 'none',
      }}
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
};

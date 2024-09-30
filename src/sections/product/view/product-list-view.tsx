import type { ChangeEvent } from 'react';
import type { UseSetStateReturn } from 'src/hooks/use-set-state';
import type { IProductListItem, IProductTableFilters } from 'src/types/product';
import type {
  GridSlots,
  GridColDef,
  GridRowSelectionModel,
  GridColumnVisibilityModel,
} from '@mui/x-data-grid';

import _ from 'lodash';
import { useMemo, useState, useEffect, useCallback } from 'react';

import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import {
  DataGrid,
  gridClasses,
  GridActionsCellItem,
  GridToolbarContainer,
  GridToolbarQuickFilter,
} from '@mui/x-data-grid';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import { useBoolean } from 'src/hooks/use-boolean';
import { useSetState } from 'src/hooks/use-set-state';

import { useGetCategories } from 'src/actions/category';
import { DashboardContent } from 'src/layouts/dashboard';
import { deleteProduct, useGetProducts } from 'src/actions/product';

import { toast } from 'src/components/snackbar';
import { Iconify } from 'src/components/iconify';
import { EmptyContent } from 'src/components/empty-content';
import { ConfirmDialog } from 'src/components/custom-dialog';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { ProductTableToolbar } from '../product-table-toolbar';
import {
  RenderCellSlug,
  RenderCellProduct,
  RenderCellCreateBy,
  RenderCellPriority,
  RenderCellCreatedAt,
} from '../product-table-row';

// ----------------------------------------------------------------------

const HIDE_COLUMNS = { category: false };

const HIDE_COLUMNS_TOGGLABLE = ['category', 'actions'];

// ----------------------------------------------------------------------

export function ProductListView() {
  const confirmRows = useBoolean();

  const router = useRouter();

  const [pageSize, setPageSize] = useState(10);

  const [currentPage, setCurrentPage] = useState(0);

  const [search, setSearch] = useState('');

  const [categories, setCategories] = useState<string[]>([]);

  const { data, productsLoading, productsMutate } = useGetProducts(
    pageSize,
    currentPage,
    search,
    categories
  );

  const { products, paginate } = data;

  const filters = useSetState<IProductTableFilters>({ categories: [] });

  useEffect(() => {
    setPageSize(pageSize);
    setCurrentPage(currentPage);
    setCategories(filters.state.categories);
  }, [pageSize, currentPage, filters]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearchChange = (event: any) => {
    setSearch(event.target.value);
    setCurrentPage(0);
  };

  const CustomToolbarMemoized = useCallback(
    () => (
      <CustomToolbar filters={filters} handleSearchChange={handleSearchChange} search={search} />
    ),
    [handleSearchChange, search, filters]
  );

  const [tableData, setTableData] = useState<IProductListItem[]>([]);

  const [selectedRowIds, setSelectedRowIds] = useState<GridRowSelectionModel>([]);

  const [filterButtonEl, setFilterButtonEl] = useState<HTMLButtonElement | null>(null);

  const [columnVisibilityModel, setColumnVisibilityModel] =
    useState<GridColumnVisibilityModel>(HIDE_COLUMNS);

  useEffect(() => {
    if (products.length) {
      setTableData(products);
    }
  }, [products]);

  const handleDeleteRow = async (id: string) => {
    await deleteProduct(id);
    productsMutate();
    toast.success('Xóa thành công!');
  };

  const handleDeleteRows = useCallback(async () => {
    await Promise.all(selectedRowIds.map((item) => deleteProduct(item.toString())));
  }, [selectedRowIds]);

  const handleEditRow = useCallback(
    (slug: string) => {
      router.push(paths.dashboard.product.edit(slug));
    },
    [router]
  );

  const handleViewRow = useCallback(
    (id: string) => {
      router.push(paths.dashboard.product.details(id));
    },
    [router]
  );

  const columns: GridColDef[] = [
    { field: 'category', headerName: 'Category', filterable: false },
    {
      field: 'id',
      headerName: 'Mã sản phẩm',
      width: 160,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params) => <RenderCellSlug params={params} />,
    },
    {
      field: 'name',
      headerName: 'Sản phẩm',
      flex: 1,
      minWidth: 160,
      hideable: false,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params) => (
        <RenderCellProduct params={params} onViewRow={() => handleViewRow(params.row.slug)} />
      ),
    },
    {
      field: 'priority',
      headerName: 'Độ ưu tiên',
      headerAlign: 'center',
      width: 100,
      editable: true,
      align: 'center',
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params) => <RenderCellPriority params={params} />,
    },
    // {
    //   field: 'price',
    //   headerName: 'Giá',
    //   width: 140,
    //   editable: true,
    //   sortable: false,
    //   filterable: false,
    //   disableColumnMenu: true,
    //   renderCell: (params) => <RenderCellPrice params={params} />,
    // },
    // {
    //   field: 'salePercent',
    //   headerName: 'Giảm giá',
    //   headerAlign: 'center',
    //   align: 'center',
    //   width: 100,
    //   editable: true,
    //   sortable: false,
    //   filterable: false,
    //   disableColumnMenu: true,
    //   renderCell: (params) => <RenderCellSalePercent params={params} />,
    // },
    {
      field: 'createdAt',
      headerName: 'Ngày tạo',
      width: 160,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params) => <RenderCellCreatedAt params={params} />,
    },
    {
      field: 'createBy',
      headerName: 'Tạo bởi',
      width: 110,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params) => <RenderCellCreateBy params={params} />,
    },
    {
      type: 'actions',
      field: 'actions',
      headerName: ' ',
      align: 'right',
      headerAlign: 'right',
      width: 80,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      getActions: (params) => [
        <GridActionsCellItem
          showInMenu
          icon={<Iconify icon="solar:eye-bold" />}
          label="Xem"
          onClick={() => handleViewRow(params.row.slug)}
        />,
        <GridActionsCellItem
          showInMenu
          icon={<Iconify icon="solar:pen-bold" />}
          label="Sửa"
          onClick={() => handleEditRow(params.row.slug)}
        />,
        <GridActionsCellItem
          showInMenu
          icon={<Iconify icon="solar:trash-bin-trash-bold" />}
          label="Xóa"
          onClick={() => {
            handleDeleteRow(params.row.id);
          }}
          sx={{ color: 'error.main' }}
        />,
      ],
    },
  ];

  const getTogglableColumns = () =>
    columns
      .filter((column) => !HIDE_COLUMNS_TOGGLABLE.includes(column.field))
      .map((column) => column.field);

  return (
    <>
      <DashboardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <CustomBreadcrumbs
          heading="Danh sách"
          links={[
            { name: 'Quản trị', href: paths.dashboard.root },
            { name: 'Sản phẩm', href: paths.dashboard.product.root },
            { name: 'Danh sách' },
          ]}
          action={
            <Button
              component={RouterLink}
              href={paths.dashboard.product.new}
              variant="contained"
              startIcon={<Iconify icon="mingcute:add-line" />}
            >
              Thêm sản phẩm
            </Button>
          }
          sx={{ mb: { xs: 3, md: 5 } }}
        />

        <Card
          sx={{
            flexGrow: { md: 1 },
            display: { md: 'flex' },
            height: { xs: 800, md: 2 },
            flexDirection: { md: 'column' },
          }}
        >
          <DataGrid
            disableRowSelectionOnClick
            rows={tableData}
            columns={columns}
            loading={productsLoading}
            getRowHeight={() => 'auto'}
            pageSizeOptions={[5, 10, 25]}
            initialState={{
              pagination: { paginationModel: { pageSize, page: currentPage } },
            }}
            rowCount={paginate.totalCount}
            paginationMode="server"
            filterMode="server"
            onPaginationModelChange={(params) => {
              setPageSize(params.pageSize);
              setCurrentPage(params.page);
            }}
            onRowSelectionModelChange={(newSelectionModel) => setSelectedRowIds(newSelectionModel)}
            columnVisibilityModel={columnVisibilityModel}
            onColumnVisibilityModelChange={(newModel) => setColumnVisibilityModel(newModel)}
            slots={{
              toolbar: CustomToolbarMemoized as GridSlots['toolbar'],
              noRowsOverlay: () => <EmptyContent />,
              noResultsOverlay: () => <EmptyContent title="No results found" />,
            }}
            slotProps={{
              panel: { anchorEl: filterButtonEl },
              toolbar: { setFilterButtonEl },
              columnsManagement: { getTogglableColumns },
            }}
            sx={{ [`& .${gridClasses.cell}`]: { alignItems: 'center', display: 'inline-flex' } }}
          />
        </Card>
      </DashboardContent>

      <ConfirmDialog
        open={confirmRows.value}
        onClose={confirmRows.onFalse}
        title="Delete"
        content={
          <>
            Bạn chắc chắn muốn xóa <strong> {selectedRowIds.length} </strong> sản phẩm?
          </>
        }
        action={
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              handleDeleteRows();
              confirmRows.onFalse();
            }}
          >
            Xóa
          </Button>
        }
      />
    </>
  );
}

// ----------------------------------------------------------------------

interface CustomToolbarProps {
  filters: UseSetStateReturn<IProductTableFilters>;
  search: string;
  handleSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function CustomToolbar({ handleSearchChange, search, filters }: CustomToolbarProps) {
  const [localSearch, setLocalSearch] = useState(search);

  const debouncedHandleSearchChange = useMemo(
    () => _.debounce((event: ChangeEvent<HTMLInputElement>) => handleSearchChange(event), 500),
    [handleSearchChange]
  );

  const handleLocalSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLocalSearch(event.target.value);
    debouncedHandleSearchChange(event);
  };

  useEffect(() => {
    setLocalSearch(search);
  }, [search]);

  const { categories } = useGetCategories();

  return (
    <GridToolbarContainer>
      <ProductTableToolbar filters={filters} options={{ categories }} />
      <GridToolbarQuickFilter
        onChange={handleLocalSearchChange}
        value={localSearch}
        placeholder="Mã hoặc tên sản phẩm..."
      />
    </GridToolbarContainer>
  );
}

export default CustomToolbar;

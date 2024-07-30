import type { ICategoryItem } from 'src/types/category';
import type {
  GridColDef,
  GridRowParams,
  GridRowSelectionModel,
  GridColumnVisibilityModel,
} from '@mui/x-data-grid';

import React, { useState, useEffect, useCallback } from 'react';

import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { DataGrid, gridClasses, GridActionsCellItem } from '@mui/x-data-grid';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import { useBoolean } from 'src/hooks/use-boolean';

import { deleteProduct } from 'src/actions/product';
import { DashboardContent } from 'src/layouts/dashboard';
import { deleteCategory, useGetCategories } from 'src/actions/category';

import { toast } from 'src/components/snackbar';
import { Iconify } from 'src/components/iconify';
import { EmptyContent } from 'src/components/empty-content';
import { ConfirmDialog } from 'src/components/custom-dialog';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { RenderCellID, RenderCellName, RenderCellCreateBy } from '../category-table-row';

// Utility function to flatten the categories
function flattenCategories(
  categories: ICategoryItem[],
  level = 0,
  parentId: string | null = null
): any[] {
  let flattened: any[] = [];

  categories.forEach((category) => {
    flattened.push({ ...category, level, parentId, categories: [] });

    if (category.categories && category.categories.length > 0) {
      flattened = flattened.concat(flattenCategories(category.categories, level + 1, category.id));
    }
  });

  return flattened;
}

const HIDE_COLUMNS = { category: false, id: false };
const HIDE_COLUMNS_TOGGLABLE = ['category', 'actions'];

export function CategoryListView() {
  const confirmRows = useBoolean();
  const router = useRouter();
  const { categories, categoriesLoading } = useGetCategories();
  const [tableData, setTableData] = useState<any[]>([]);
  const [selectedRowIds, setSelectedRowIds] = useState<GridRowSelectionModel>([]);
  const [filterButtonEl, setFilterButtonEl] = useState<HTMLButtonElement | null>(null);
  const [columnVisibilityModel, setColumnVisibilityModel] =
    useState<GridColumnVisibilityModel>(HIDE_COLUMNS);

  useEffect(() => {
    if (categories.length) {
      const flattenedData = flattenCategories(categories);
      setTableData(flattenedData);
    }
  }, [categories]);

  const handleDeleteRow = async (id: string) => {
    await deleteCategory(id);
    toast.success('Xóa thành công!');
  };

  const handleDeleteRows = useCallback(async () => {
    await Promise.all(selectedRowIds.map((item) => deleteProduct(item.toString())));
  }, [selectedRowIds]);

  const handleEditRow = useCallback(
    (name: string) => {
      router.push(paths.dashboard.category.edit(name));
    },
    [router]
  );

  const columns: GridColDef[] = [
    { field: 'category', headerName: 'Category', filterable: false },
    {
      field: 'id',
      headerName: 'Mã loại sản phẩm',
      width: 160,
      renderCell: (params) => <RenderCellID params={params} />,
    },
    {
      field: 'name',
      headerName: 'Loại sản phẩm',
      flex: 1,
      minWidth: 160,
      hideable: false,
      renderCell: (params) => <RenderCellName params={params} />,
    },
    {
      field: 'createBy',
      headerName: 'Tạo bởi',
      headerAlign: 'center',
      width: 130,
      editable: true,
      align: 'center',
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
      getActions: (params: GridRowParams) => [
        <GridActionsCellItem
          showInMenu
          icon={<Iconify icon="solar:pen-bold" />}
          label="Sửa"
          onClick={() => handleEditRow(params.row.name)}
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
            { name: 'Loại sản phẩm', href: paths.dashboard.product.root },
            { name: 'Danh sách' },
          ]}
          action={
            <Button
              component={RouterLink}
              href={paths.dashboard.category.new}
              variant="contained"
              startIcon={<Iconify icon="mingcute:add-line" />}
            >
              Thêm loại sản phẩm
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
            loading={categoriesLoading}
            getRowHeight={() => 'auto'}
            initialState={{
              pagination: { paginationModel: { pageSize: 100, page: 1 } },
            }}
            onRowSelectionModelChange={(newSelectionModel) => setSelectedRowIds(newSelectionModel)}
            columnVisibilityModel={columnVisibilityModel}
            onColumnVisibilityModelChange={(newModel) => setColumnVisibilityModel(newModel)}
            slots={{
              noRowsOverlay: () => <EmptyContent />,
              noResultsOverlay: () => <EmptyContent title="No results found" />,
            }}
            slotProps={{
              panel: { anchorEl: filterButtonEl },
              toolbar: { setFilterButtonEl },
              columnsManagement: { getTogglableColumns },
            }}
            sx={{ [`& .${gridClasses.cell}`]: { alignItems: 'center', display: 'inline-flex' } }}
            hideFooter
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

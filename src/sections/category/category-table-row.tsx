import type { GridCellParams } from '@mui/x-data-grid';

// ----------------------------------------------------------------------

type ParamsProps = {
  params: GridCellParams;
};

export function RenderCellID({ params }: ParamsProps) {
  return <div style={{ paddingLeft: `${params.row.level * 20}px` }}>{params.row.id}</div>;
}

export function RenderCellName({ params }: ParamsProps) {
  return <div style={{ paddingLeft: `${params.row.level * 20}px` }}>{params.row.name}</div>;
}

export function RenderCellCreateBy({ params }: ParamsProps) {
  return params.row.createBy.email;
}

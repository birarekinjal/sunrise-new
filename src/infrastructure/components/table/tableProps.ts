export interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number,
  ) => void;
}

export interface HeadCell {
  disablePadding?: boolean;
  id?: keyof any;
  label?: string;
  numeric?: boolean;
  subject?: string;
  role?:string;
}
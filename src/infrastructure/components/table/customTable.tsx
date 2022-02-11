import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePaginationActions from './pagination';
import TableHead from '@mui/material/TableHead';
import Checkbox from '@mui/material/Checkbox';



const CustomTable = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [ids, setIds] = React.useState<Array<number>>([]);


  const rows = [
    {
      id: 1,
      name:'Botree',
      subject:'Python',
      role:'react developer',
    },
    {
      id: 2,
      name:'Tntra',
      subject:'Java',
      role:'python developer',
    },
    {
      id: 3,
      name:'amazon',
      subject:'React',
      role:'AI developer',
    },
    {
      id: 4,
      name:'tata',
      subject:'Ruby',
      role:'Java developer',
    },
    {
      id: 5,
      name:'google',
      subject:'AWS',
      role:'Ruby developer',
    },
    {
      id: 6,
      name:'microsoft',
      subject:'azure',
      role:'azure developer',
    },
  ];


  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  
  
  const headCells = [
    {
      id: 'name',
      label: 'OrgName',
      subject: 'subject',
      role: 'Role',
    },
  ];

  const selectUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedId = parseInt(event.target.value);
    // Check if "ids" contains "selectedIds"
    // If true, this checkbox is already checked
    // Otherwise, it is not selected yet
    if (ids.includes(selectedId)) {
      const newIds = ids.filter((id:any) => id !== selectedId);
      setIds(newIds);
    } else {
      const newIds = [...ids];
      newIds.push(selectedId);
      setIds(newIds);
    }
  };

 
  return (
    <TableContainer component={Paper}>
      <Table  sx={{ minWidth: 500 }} aria-label="custom pagination table">
      <TableHead>
        <TableRow>
          <TableCell>
            <Checkbox  
            color="primary"     
            />
          </TableCell>
            {
              headCells && headCells.length > 0 && 
              headCells.map((v: any) => (
                <>
                <TableCell>{v.label}</TableCell>
                <TableCell align="right">{v.subject}</TableCell>
                <TableCell align="right">{v.role}</TableCell>
                </>
              ))
            }
            </TableRow>
        </TableHead>
        <TableBody>
      
      {(rowsPerPage > 0
        ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        : rows
      ).map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            <TableCell>
            <Checkbox  
            color="primary" 
            onChange={selectUser}
            value={row.id}
            checked={ids.includes(row.id) ? true : false}
            />
          </TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.subject}</TableCell>
              <TableCell align="right">{row.role}</TableCell>
            </TableRow>
      ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
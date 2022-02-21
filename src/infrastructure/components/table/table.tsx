import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePaginationActions from './pagination';
import TableHead from '@mui/material/TableHead';
import { headCells } from './tableConstant';
import { Checkbox, TablePagination } from '@material-ui/core';

type CustomTableProps = {
  // children?: React.ReactNode,
  // pageCount?: any,
  // rowsPerPage?: any,
  // page?: any,
  // handleChangePage?:any,
  // handleChangeRowsPerPage?:any,
  // handleSelectAll?: any,

  isCheckbox?: boolean,
  handleSelectAllData?: any;
  handleSelect?: any;
  rows?: any
  // onHeaderClick?: any,
  // value?: any
  // checked?: any
  // selectUser?:any
};


const CustomTable: React.FC<CustomTableProps> = ({
  isCheckbox,
  // onHeaderClick,
  // selectUser,
  handleSelectAllData,
  handleSelect,
  rows,
}) => {
  const [ids, setIds] = useState<Array<number>>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [check, setCheck] = useState(false);
  const [sortMethod, setSortMethod] = useState('both');


  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };


  // This function will return the Row count of per page
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  // This function will return the particular ID of entire 
  const selectUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedId = parseInt(event.target.value);
    if (ids.includes(selectedId)) {
      const newIds = ids.filter((id: any) => id !== selectedId);
      setIds(newIds);
    } else {
      const newIds = [...ids];
      newIds.push(selectedId);
      setIds(newIds);
    }

    // this function is used to pass id to parent component
    handleSelect(selectedId);
  };

  const getPagination = () => {
    return rowsPerPage > 0
      ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      : rows;
  };


  const handleSelectAll = () => {
    var id: any = [];
    if (check == false) {
      rows.map((value: any) => {
        id.push(value.id);
      });
      setIds(id);
    } else {
      setIds([]);
    }
    setCheck(!check);

    // this function is used to pass id to parent component
    handleSelectAllData(id);
  };



  // useEffect(()=>{
  //   sortingTableData();
  // }, []);

  // const sortingTableData = () => {
  //   var data:any = [];

  //   console.log('data', data);

  //   rows.map((value) => {
  //     data.push(value);
  //     console.log('order', _.orderBy(value, [value.id],  ['desc']));
  //   });

  // };


  // console.log('order', _.orderBy(rows,  ['desc']));

  const addSortingClassInHeader = (sort: any) => {
    return sort ? 'sorting' : '';
  };

  const onHeaderClick = () => {
    setSortMethod('asc');
    if (sortMethod === 'asc') {
      setSortMethod('desc');
    }
  };


  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <TableCell>
                {
                  isCheckbox && ids.length > 0 &&
                  (
                    <Checkbox
                      color="primary"
                      onClick={handleSelectAll}
                    />
                  )
                }
              </TableCell>
              {
                headCells && headCells.length > 0 &&
                headCells.map(({ label, sort }, index: any) => (
                  <>
                    <TableCell
                      key={index}
                      className={addSortingClassInHeader('sort')}
                      onClick={() => sort && onHeaderClick()}
                    >
                      {label.toUpperCase()}
                    </TableCell>
                  </>
                ))
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {
              getPagination().map((value: any) => (
                <TableRow>
                  <TableCell>
                    {
                      isCheckbox && (
                        <Checkbox
                          color="primary"
                          onChange={selectUser}
                          value={value.id}
                          checked={ids.includes(value.id) ? true : false}
                        />
                      )
                    }
                  </TableCell>
                  <TableCell>{value.name}</TableCell>
                  <TableCell>{value.email}</TableCell>
                  <TableCell>{value.phone}</TableCell>
                  <TableCell>{value.role}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
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
      </TableContainer>
    </>
  );
};


export default CustomTable;
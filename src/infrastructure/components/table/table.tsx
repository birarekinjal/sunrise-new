import React, { useState  } from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Checkbox from '@mui/material/Checkbox';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TablePagination from '@mui/material/TablePagination';

// import TableSortLabel from '@mui/material/TableSortLabel';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

// import IconButton from '@mui/material/IconButton';
// import Tooltip from '@mui/material/Tooltip';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Switch from '@mui/material/Switch';
// import DeleteIcon from '@mui/icons-material/Delete';
// import FilterListIcon from '@mui/icons-material/FilterList';


interface HeadCell {
  disablePadding: boolean;
  id: keyof any;
  label: string;
  numeric: boolean;
  subject: string;
  role:string;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'OrgName',
    subject: 'subject',
    role: 'Role',
  },
];

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


const CustomTable = () => {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  const [ids, setIds] = useState<Array<number>>([]);



  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };


  const selectUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedId = parseInt(event.target.value);
    // Check if "ids" contains "selectedIds"
    // If true, this checkbox is already checked
    // Otherwise, it is not selected yet
    if (ids.includes(selectedId)) {
      const newIds = ids.filter((id) => id !== selectedId);
      setIds(newIds);
    } else {
      const newIds = [...ids];
      newIds.push(selectedId);
      setIds(newIds);
    }
  };

  // const handleCheckAll = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log('checkAll', event.target.checked);
  //   if(event.target.checked === true){
  //     setIds([]);
  //   } else {
  //     console.log('sorry')
  //   };
  // };


  return (
    <>
    <Paper>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
        <TableRow>
          <TableCell>
            {/* <Checkbox  
            color="primary"     
            onChange={handleCheckAll} 
            /> */}
          </TableCell>
            {
              headCells && headCells.length > 0 && 
              headCells.map((v: any) => (
                <>
                <TableCell><h6>{v.label}</h6></TableCell>
                <TableCell align="right"><h6>{v.subject}</h6></TableCell>
                <TableCell align="right"><h6>{v.role}</h6></TableCell>
                </>
              ))
            }
            </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
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
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination 
    rowsPerPageOptions={[5, 10, 25]}
    component="div"
    count={rows.length}
    rowsPerPage={rowsPerPage}
    page={page}
    onPageChange={handleChangePage}
    onRowsPerPageChange={handleChangeRowsPerPage}
    />
    </Paper>
  </>
  );
};
  
export default CustomTable;

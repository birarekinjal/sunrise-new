// import React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableFooter from '@mui/material/TableFooter';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import TablePaginationActions from './pagination';
// import TableHead from '@mui/material/TableHead';
// import Checkbox from '@mui/material/Checkbox';
// import { headCells, rows } from './tableConstant';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import Popover from '@mui/material/Popover';
// import Typography from '@mui/material/Typography';




// const CustomTable = () => {
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);
//   const [ids, setIds] = React.useState<Array<number>>([]);
//   const [popOver, setPopOver] = React.useState<HTMLButtonElement | null>(null);







//   // Avoid a layout jump when reaching the last page with empty rows.
//   const emptyRows =
//     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;


//   // this function will return the page number
//   const handleChangePage = (
//     event: React.MouseEvent<HTMLButtonElement> | null,
//     newPage: number,
//   ) => {
//     setPage(newPage);
//   };


//   // This function will return the Row count of per page
//   const handleChangeRowsPerPage = (
//     event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//   ) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };




//   // This function will return the particular ID of entire 
//   const selectUser = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const selectedId = parseInt(event.target.value);
//     // Check if "ids" contains "selectedIds"
//     // If true, this checkbox is already checked
//     // Otherwise, it is not selected yet
//     if (ids.includes(selectedId)) {
//       const newIds = ids.filter((id:any) => id !== selectedId);
//       setIds(newIds);
//     } else {
//       const newIds = [...ids];
//       newIds.push(selectedId);
//       setIds(newIds);
//     }
//   };

//   const handleOpenPopover = (event: React.MouseEvent<HTMLButtonElement>) => {
//     setPopOver(event.currentTarget);
//     // console.log('popover', event);
//   };

//   const handleClosePopover = () => {
//     setPopOver(null);
//   };

//   const open = Boolean(popOver);
//   const id = open ? 'simple-popover' : undefined;


//   const FilterComponent = (data:any) => {
//     const filterOptions = Object.keys(data.data);

//     return (
//       <>
//       <span onClick={handleOpenPopover}> 
//       <MoreVertIcon />
//       </span>
    
//       <Popover
//         id={id}
//         open={open}
//         anchorEl={popOver}
//         onClose={handleClosePopover}
//         anchorOrigin={{
//           vertical: 'bottom',
//           horizontal: 'left',
//         }}
//       >
//         {
//           filterOptions && 
//           filterOptions.length > 0 &&
//           filterOptions.map((value)=> (
//             <>
//              <Typography sx={{ p: 2 }} >{value}</Typography>
//             </>
//           ))
//         }
       
//       </Popover>
//       </>
//     );
//   };


 
//   return (
//     <TableContainer component={Paper}>
//       <Table  sx={{ minWidth: 500 }} aria-label="custom pagination table">
//       <TableHead>
//         <TableRow>
//           <TableCell>
//             <Checkbox  
//             color="primary"     
//             />
//           </TableCell>
//             {
//               headCells && headCells.length > 0 && 
//               headCells.map((v: any) => (
//                 <>
//                 {/* <TableCell>{v.label}</TableCell> */}
//                 <TableCell align="right">{v.subject}</TableCell>
//                 <TableCell align="right">{v.role}<FilterComponent data={v}/></TableCell>
//                 </>
//               ))
//             }
//             </TableRow>
//         </TableHead>
//         <TableBody>
      
//       {(rowsPerPage > 0
//         ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//         : rows
//       ).map((row) => (
//             <TableRow
//               key={row.name}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//             <TableCell>
//             <Checkbox  
//             color="primary" 
//             onChange={selectUser}
//             value={row.id}
//             checked={ids.includes(row.id) ? true : false}
//             />
//           </TableCell>
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.subject}</TableCell>
//               <TableCell align="right">{row.role}</TableCell>
//           </TableRow>
//       ))}
//           {emptyRows > 0 && (
//             <TableRow style={{ height: 53 * emptyRows }}>
//               <TableCell colSpan={6} />
//             </TableRow>
//           )}
//         </TableBody>
//         <TableFooter>
//           <TableRow>
//             <TablePagination
//               rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
//               colSpan={3}
//               count={rows.length}
//               rowsPerPage={rowsPerPage}
//               page={page}
//               SelectProps={{
//                 inputProps: {
//                   'aria-label': 'rows per page',
//                 },
//                 native: true,
//               }}
//               onPageChange={handleChangePage}
//               onRowsPerPageChange={handleChangeRowsPerPage}
//               ActionsComponent={TablePaginationActions}
//             />
//           </TableRow>
//         </TableFooter>
//       </Table>
//     </TableContainer>
//   );
// };

// export default CustomTable;



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
// import Checkbox from '@mui/material/Checkbox';
import { headCells  } from './tableConstant';
import {  Checkbox, Popover, TablePagination  } from '@material-ui/core';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import { rows  } from './tableConstant';



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
  // onHeaderClick?: any,
  // value?: any
  // checked?: any
  // selectUser?:any
};


const CustomTable:React.FC<CustomTableProps> = ({
  isCheckbox,
  // onHeaderClick,
  // selectUser,
  handleSelectAllData,
  handleSelect,
}) => {
  const [ids, setIds] = useState<Array<number>>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [check, setCheck] = useState(false);
  const [sortMethod, setSortMethod] = useState('both');
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

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
      const newIds = ids.filter((id:any) => id !== selectedId);
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
    var id:any = [];
    if (check == false) {
      rows.map((value:any)=>{
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

  const addSortingClassInHeader = (sort:any) => {
    return sort ? 'sorting' : '';
  };

  const onHeaderClick = () => {
    setSortMethod('asc');
    if ( sortMethod === 'asc'){
      setSortMethod('desc');
    }
  };

  // const filterData = [
  //   // { label: 'Name', id: 'name'  },
  //   { label: 'name', id: 'name' },
  //   { label: 'Email', id: 'email' },
  //   { label: 'Phone', id: 'phone'  },
  //   { label: 'Role', id: 'Role'  },
  // ];


 

  // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


 
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
        <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        {/* {
          filterData && filterData.length > 0 && 
          filterData.map(( value:any ) => (
            <Typography sx={{ p: 2 }}> {value.label.toUpperCase()}</Typography>
          ))
        } */}
       
      </Popover>
                  {label.toUpperCase()}
                  {/* {
                    icon && <MoreVertIcon onClick={handleClick} />
                  } */}
                  </TableCell>
                </>
              ))
            }
            </TableRow>
        </TableHead>
        <TableBody>    
              {
                getPagination().map((value:any) => (
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
                  {/* <TableCell>{value.id}</TableCell> */}
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
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useFetchApiData } from '../../../../application/hooks/useFetchApiData';
import { Button, Loader, TableData } from '../../../../infrastructure/components/index';
import { userService } from '../../../../infrastructure/services/users/user.service';
import WithContainerLayout from '../../../layout/withContainer';
import { useNavigate } from 'react-router-dom';
import Fab from '@mui/material/Fab';
import Tooltip from '@mui/material/Tooltip';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useState } from 'react';
import { useSetUserList } from '../hooks/useSetTablePagination';


export type userModal = {
  data?: any;
  iisLoading?: boolean;
  setPagination?: any;
  setRowPerPage?: any;
  parms?: any;
  usersDetails?: any;
  isUsersDetailsAPILoading?: any;
};


const UserManagement = () => {

  const navigate = useNavigate();
  const { data: usersDetails, isLoading: isUsersDetailsAPILoading, setPagination, setRowPerPage, parms } = useSetUserList();


  const handlePageChange = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number,
  ) => {
    setPagination(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowPerPage(parseInt(event.target.value, 10));
  };


  return (
    <WithContainerLayout>
      <section className='main-container'>
        <div className='title-btn'>
          <h1>User Management</h1>
          <Tooltip title="Add User" placement="top">
            <Fab color="secondary" size="medium" aria-label="Add User" onClick={() => navigate('/add-user')}>
              <AddCircleOutlineIcon />
            </Fab>
          </Tooltip>
        </div>
        <Card>
          <CardContent className='p-0'>
            {isUsersDetailsAPILoading ? <Loader /> :
              <TableData
                rows={usersDetails}
                handlePageChange={handlePageChange}
                page={parms?.page_no}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
                rowsPerPage={parms?.page_size}
              />}
          </CardContent>
        </Card>
      </section>
    </WithContainerLayout>
  );
};

export default UserManagement;

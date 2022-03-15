/* eslint-disable @typescript-eslint/no-unused-vars */
import { Loader, TableData } from '../../../../infrastructure/components/index';
import WithContainerLayout from '../../../layout/withContainer';
import { useNavigate } from 'react-router-dom';
import Fab from '@mui/material/Fab';
import Tooltip from '@mui/material/Tooltip';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useSetUserList } from './hooks/useSetTablePagination';

const UserManagement = () => {

  const navigate = useNavigate();
  const { data: usersDetails, isLoading: isUsersDetailsAPILoading, setPagination, setRowPerPage, parms } = useSetUserList();

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
                usersDetails={usersDetails}
                handlePageChange={setPagination}
                page={parms?.page_no}
                handleChangeRowsPerPage={setRowPerPage}
                rowsPerPage={parms?.page_size}
              />
            }
          </CardContent>
        </Card>
      </section>
    </WithContainerLayout>
  );
};

export default UserManagement;

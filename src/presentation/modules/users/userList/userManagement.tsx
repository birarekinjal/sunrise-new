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

const UserManagement = () => {

  const navigate = useNavigate();
  const userServiceApi = new userService();

  const [{ data: usersDetails = [], isLoading: isUsersDetailsAPILoading }] = useFetchApiData({
    apiFunction: userServiceApi.fetchUser,
    defaultResponseValue: [],
    dependencyArray: [],
    apiParams: '',
    apiCallCondition: true,
  });

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
              <TableData rows={usersDetails} />}
          </CardContent>
        </Card>
      </section>
    </WithContainerLayout>
  );
};

export default UserManagement;

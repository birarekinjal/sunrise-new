/* eslint-disable @typescript-eslint/no-unused-vars */
import { useFetchApiData } from '../../../../application/hooks/useFetchApiData';
import { Button, Loader, TableData } from '../../../../infrastructure/components/index';
import { userService } from '../../../../infrastructure/services/users/user.service';
import WithContainerLayout from '../../../layout/withContainer';
import { useNavigate } from 'react-router-dom';

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
      <section className='main-container layout-page'>
        User Management

        <Button
          label="Add-user"
          color="primary"
          variant="outlined"
          onClick={() => navigate('/add-user')}
        />

        {isUsersDetailsAPILoading ? <Loader /> :
          <TableData rows={usersDetails} />}

      </section>
    </WithContainerLayout>
  );
};

export default UserManagement;

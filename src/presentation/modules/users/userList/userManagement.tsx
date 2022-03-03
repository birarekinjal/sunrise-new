/* eslint-disable @typescript-eslint/no-unused-vars */
import { useFetchApiData } from '../../../../application/hooks/useFetchApiData';
import { Button, Loader, Table } from '../../../../infrastructure/components/index';
import { userService } from '../../../../infrastructure/services/users/user.service';
import WithContainerLayout from '../../../layout/withContainer';
// import { useHistory } from 'react-router-dom';

// import { useDispatch } from 'react-redux';
// import { fetchUser } from './redux/action-creators';
// import { RootState } from '../../reducer/rootReducer';

const UserManagement = ({ history }: any) => {
  // const history = useHistory();
  const userServiceApi = new userService();

  // const dispatch = useDispatch();

  //const stateData = useSelector((state: RootState) => state.user);

  // useEffect(() => {
  //   dispatch(fetchUser({ name: 'Kina', age: '23' }));
  // // }, []);

  const [{ data: usersDetails = [], isLoading: isUsersDetailsAPILoading }] = useFetchApiData({
    apiFunction: userServiceApi.fetchUser,
    defaultResponseValue: [],
    dependencyArray: [],
    apiParams: '',
    apiCallCondition: true,
  });

  const handleSelect = () => {
    // get to a single checkbox id add parameter over here and check output 
  };

  const handleSelectAllData = () => {
    // to get selectAll checkbox ID add parameter over here and check output 
  };


  return (
    <WithContainerLayout>
      <section className='main-container layout-page'>
        User Management

        <Button
          label="Add-user"
          color="primary"
          variant="outlined"
          onClick={() => history.push('/add-user')}
        />

        {isUsersDetailsAPILoading ? <Loader /> :
          <Table rows={usersDetails} handleSelect={handleSelect} handleSelectAllData={handleSelectAllData} />}
      </section>
    </WithContainerLayout>
  );
};

export default UserManagement;

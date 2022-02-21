/* eslint-disable @typescript-eslint/no-unused-vars */
import { useFetchApiData } from '../../../../application/hooks/useFetchApiData';
import { Table } from '../../../../infrastructure/components/index';
import { userService } from '../../../../infrastructure/services/users/user.service';
import Header from '../../../layout/header/header';

// import { useDispatch } from 'react-redux';
// import { fetchUser } from './redux/action-creators';
// import { RootState } from '../../reducer/rootReducer';

function UserManagement() {

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


  // console.log(usersDetails, "usersDetails", isUsersDetailsAPILoading);
  return (
    <div>
      <Header />
      User Management
      <Table rows={usersDetails} handleSelect={handleSelect} handleSelectAllData={handleSelectAllData} />
    </div>
  );
}

export default UserManagement;

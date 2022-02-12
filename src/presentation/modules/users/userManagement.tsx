import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { RootState } from '../../reducer/rootReducer';
import { fetchUser } from './action-creators';

function UserManagement() {

  const dispatch = useDispatch();

  // const stateData = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(fetchUser({ name: 'Kina', age: '23' }));
  }, []);

  return (
    <div>
      User Management
    </div>
  );
}

export default UserManagement;

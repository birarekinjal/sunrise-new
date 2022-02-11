import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../reducer/rootReducer';
import { fetchUser } from './action-creators';

const UserManagement = () => {

  const dispatch = useDispatch()

  const state = useSelector((state: RootState) => state.user)

  useEffect(() => {
    dispatch(fetchUser({ name: 'Kinjal', age: '23' }));
  }, []);

  return (
    <div>
      User Management
    </div>
  );
};

export default UserManagement;
import { useState } from 'react';
import toast from 'react-hot-toast';
import { userService } from '../../../../../infrastructure/services/users/user.service';
import { UserModal } from '../createUserModal';

export const useSetUserForm = () => {

  const userServiceApi = new userService();
  const [state, setState] = useState({
    isLoading: false,
  });

  const { isLoading } = state;

  const handleOnSubmit = (data: UserModal) => {
    setState({
      ...state,
      isLoading: true,
    });
    userServiceApi.createUser(data)
      .then((res: any) => {
        if (res.status_code === 200) {
          setState({
            ...state,
            isLoading: false,
          });
          toast(res?.data?.message);
        } else {
          setState({
            ...state,
            isLoading: false,
          });
          toast(res?.message);
        }
      })
      .catch((err: any) => {
        setState({
          ...state,
          isLoading: false,
        });
        toast(err?.response?.data?.message);
      });
  };

  return { isLoading, handleOnSubmit };

};
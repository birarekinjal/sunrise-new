import { useState } from 'react';
import { LoginDataType } from '../models/loginDataModel';
import { Login } from '../redux/action-creators';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useAppDispatch } from '../../../../../application/hooks/hooks';

export const useSetUserData = () => {
  const dispatch = useAppDispatch()


  const [state, setState] = useState({
    isLoading: false,
  });

  const { isLoading } = state;

  const handleOnSubmit = (data: LoginDataType) => {
    setState({
      ...state,
      isLoading: true,
    });


    dispatch(Login(data))
      .then((res: any) => {
        if (res.status_code === 200) {
          setState({
            ...state,
            isLoading: false,
          });
          toast(res?.message);
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
        toast(err?.message);
      });
  };

  return { isLoading, handleOnSubmit };

};
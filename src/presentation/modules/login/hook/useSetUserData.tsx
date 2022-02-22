import { useDispatch } from 'react-redux';
import { LoginDataType } from '../models/loginDataModel';
import { Login } from '../redux/action-creators';

export const useSetUserData = () => {
  const dispatch = useDispatch();

  const handleOnSubmit = (data: LoginDataType) => {
    dispatch(Login(data));
  };

  return { handleOnSubmit };

};
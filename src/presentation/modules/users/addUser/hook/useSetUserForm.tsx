import { useDispatch } from 'react-redux';
import { UserModal } from '../createUserModal';

export const useSetUserForm = () => {
  const dispatch = useDispatch();

  const handleOnSubmit = ({ password, email, permissions, role  }:UserModal) => {

  };

  return { handleOnSubmit };
};
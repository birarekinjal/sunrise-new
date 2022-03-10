import { useState } from 'react';
import { userService } from '../../../../../infrastructure/services/users/user.service';
import { UserModal } from '../createUserModal';
import { useNavigate } from 'react-router-dom';
import { useFetchApiData } from '../../../../../application/hooks/useFetchApiHooks';

export const useSetUserForm = () => {
  const navigate = useNavigate();
  const userServiceApi = new userService();

  const [state, setState] = useState({
    submitData: {},
    isFirst: true,
  });

  const { isFirst, submitData } = state;

  const handleNavigate = () => {
    navigate('/navigate');
  };

  const [{ data = {}, isLoading }] = useFetchApiData({
    apiFunction: userServiceApi.createUser,
    defaultResponseValue: [],
    dependencyArray: [submitData],
    apiParams: submitData,
    apiCallCondition: !isFirst,
    showSuccessMessage: true,
    showErrorMessage: true,
    successCallback: handleNavigate,
  });

  const handleOnSubmit = (userFormData: UserModal) => {
    setState({
      ...state,
      isFirst: false,
      submitData: userFormData,
    });
  };
  return { isLoading, handleOnSubmit, data };

};
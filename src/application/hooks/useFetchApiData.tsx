/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useState } from 'react';
import { apiHooksValues } from '../models/apiDataModels';

const useFetchApiData = ({
  apiFunction,
  apiParams,
  hideErrorMessage,
  errorMessage,
  showSuccessMessage,
  successMessage,
}: apiHooksValues) => {
  const [state, setState] = useState({
    isLoading: false,
    isError: false,
  });

  const { isLoading, isError } = state;

  setState({ ...state, isLoading: true, isError: false });

  (apiFunction(apiParams))
    .then((res: any) => {
      if (res.data) {
        setState({
          ...state,
          isLoading: false,
          isError: false,
        });
        showSuccessMessage && alert(successMessage);
      } else {
        setState({
          ...state,
          isLoading: false,
          isError: true,
        });
        !hideErrorMessage && alert(errorMessage || res.data);
      }
    })
    .catch(() => {
      setState({ ...state, isLoading: false, isError: true });
    });
  return [{ isLoading, isError }];
};

export { useFetchApiData };

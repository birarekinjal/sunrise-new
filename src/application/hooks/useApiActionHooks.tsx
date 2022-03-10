/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useState, useEffect } from 'react';
import { apiHooksValues } from '../models/apiDataModels';

const useFetchAPIActionData = ({
  apiFunction,
  apiParams,
  dependencyArray,
  apiCallCondition = true,
  defaultResponseValue,
  showErrorMessage,
  errorMessage,
  showSuccessMessage,
  successMessage,
}: apiHooksValues) => {

  const [state, setState] = useState({
    data: defaultResponseValue,
    isLoading: false,
    isError: false,
  });

  const { data, isLoading, isError } = state;

  useEffect(() => {
    if (apiCallCondition) {
      setState({ ...state, isLoading: true, isError: false });

      (apiFunction(apiParams))
        .then((res: { data: { success: any }; }) => {
          if (res.data) {
            setState({
              ...state,
              isLoading: false,
              isError: false,
              data: res.data,
            });
            showSuccessMessage && alert(successMessage);
          } else {
            setState({
              ...state,
              isLoading: false,
              isError: true,
              data: defaultResponseValue,
            });
            showErrorMessage && alert(errorMessage || res.data);
          }
        })
        .catch(() => {
          setState({ ...state, isLoading: false, isError: true });
        });
    }
  }, dependencyArray);

  return [{ data, isLoading, isError }];
};

export { useFetchAPIActionData };

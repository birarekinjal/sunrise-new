/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useEffect, useState } from 'react';
import { apiHooksValues } from '../models/apiDataModels';

const useFetchApiData = ({
  apiFunction,
  apiParams,
  hideErrorMessage,
  errorMessage,
  showSuccessMessage,
  successMessage,
  // dependencyArray,
}: apiHooksValues) => {

  const [state, setState] = useState({
    isLoading: false,
    isError: false,
    data: [],
  });

  const { isLoading, isError, data } = state;

  useEffect(() => {
    apiFunction(apiParams)
      .then((res: any) => {
        if (res.data) {
          console.log(res.data);
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
            data: [],
          });
          !hideErrorMessage && alert(errorMessage || res.data);
        }
      })
      .catch(() => {
        setState({ ...state, isLoading: false, isError: true, data: [] });
      });
  }, []);
  return [{ isLoading, isError, data }];
};

export { useFetchApiData };

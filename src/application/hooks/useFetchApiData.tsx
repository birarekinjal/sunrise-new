/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useEffect, useState } from 'react';
import { apiHooksValues } from '../models/apiDataModels';

const useFetchApiData = ({
  apiFunction,
  apiParams,
  // hideErrorMessage,
  // errorMessage,
  // showSuccessMessage,
  // successMessage,
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
        if (res?.ok || res?.data?.status_code === 200) {
          setState({
            ...state,
            isLoading: false,
            isError: false,
            data: res.data,
          });
          // alert(res.data.message);
        } else {
          setState({
            ...state,
            isLoading: false,
            isError: true,
            data: [],
          });
          // alert(res.data.message);
        }
      })
      .catch(() => {
        setState({ ...state, isLoading: false, isError: true, data: [] });
      });
  }, []);
  return [{ isLoading, isError, data }];
};

export { useFetchApiData };

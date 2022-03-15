/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useEffect, useState } from 'react';
import { showToast } from '../../infrastructure/utility/commonMethod';
import { apiHooksValues } from '../models/apiDataModels';

const useFetchApiData = ({
  apiFunction,
  apiParams,
  showErrorMessage,
  errorMessage,
  showSuccessMessage,
  successMessage,
  dependencyArray,
  apiCallCondition,
  successCallback,
}: apiHooksValues) => {

  const [state, setState] = useState({
    isLoading: false,
    isError: false,
    data: {},
  });

  const { isLoading, isError, data } = state;

  useEffect(() => {
    if (apiCallCondition) {
      apiFunction(apiParams)
        .then((res: any) => {
          if (res?.ok || res?.data?.status_code === 200) {
            setState({
              ...state,
              isLoading: false,
              isError: false,
              data: res.data,
            });
            successCallback && successCallback();
            showSuccessMessage && showToast(successMessage || res.data.message);
          } else {
            setState({
              ...state,
              isLoading: false,
              isError: true,
              data: {},
            });
            showErrorMessage && showToast(errorMessage || res.data.message);
          }
        })
        .catch((error: any) => {
          showErrorMessage && showToast(errorMessage || error.response.data.message);
          setState({ ...state, isLoading: false, isError: true, data: {} });
        });
    }
  }, dependencyArray);

  return [{ isLoading, isError, data }];
};

export { useFetchApiData };

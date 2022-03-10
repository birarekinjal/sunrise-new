import {  useState } from 'react';
import { userService } from '../../../../../infrastructure/services/users/user.service';
import { useFetchApiData } from '../../../../../application/hooks/useFetchApiHooks';

export type paginationModal = {
  parms: { page_no:number, page_size: number };
};

const useSetUserList = () => {

  const [state, setState] = useState({
    parms: {
      page_no: 1,
      page_size: 10,
    },
  });

  const userServiceApi = new userService();

  const { parms } = state || {};

  const [{ data = {}, isLoading }] = useFetchApiData({
    apiFunction: userServiceApi.fetchUser,
    defaultResponseValue: [],
    dependencyArray: [parms],
    apiParams: { ...parms },
    apiCallCondition: true,
  });

  const setPagination = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setState({
      ...state,
      parms: {
        page_no: newPage + 1,
        page_size: parms?.page_size,
      },
    });
  };

  const setRowPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setState({
      ...state,
      parms: {
        page_no: 1,
        page_size:( +event?.target?.value),
      },
    });
  };

  return { parms, setPagination, setRowPerPage, data, isLoading };

};

export { useSetUserList };

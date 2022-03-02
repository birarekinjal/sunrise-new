import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { LoginDataType } from '../models/loginDataModel';
import { Login } from '../redux/action-creators';
import toast from 'react-hot-toast';
// import { dispatch } from '../../../../../application/store/store';
import { useAppSelector, useAppDispatch } from '../../../../../application/hooks/hooks';

export const useSetUserData = () => {
  // const dispatch = useDispatch();
  // const dispatch = useAppDispatch()

  const [state, setState] = useState({
    isLoading: false,
  });

  const { isLoading } = state;

  const handleOnSubmit = (data: LoginDataType) => {
    setState({
      ...state,
      isLoading: true,
    });

    console.log(data, "data")

    // dispatch(Login(data))
    //   .then((res: any) => {
    //     if (res.status_code === 200) {
    //       setState({
    //         ...state,
    //         isLoading: false,
    //       });
    //       toast(res?.message);
    //     } else {
    //       setState({
    //         ...state,
    //         isLoading: false,
    //       });
    //       toast(res?.message);
    //     }
    //   })
    //   .catch(err => {
    //     setState({
    //       ...state,
    //       isLoading: false,
    //     });
    //     toast(err?.message);
    //   });
  };

  return { isLoading, handleOnSubmit };

};
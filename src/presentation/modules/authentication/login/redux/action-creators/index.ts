import { Dispatch  } from 'redux';
import { LoginService } from '../../../../../../infrastructure/services/login/login.service';
import { saveToken } from '../../../../../../infrastructure/utility/commonMethod';
import { LoginDataType } from '../../models/loginDataModel';
import { ActionType } from '../action-types';
import { Action } from '../actions/index';

const loginService = new LoginService();

export const setAccessToken = (rest : any) => {
  return (dispatch: Dispatch<Action>) => {
    saveToken(rest?.payload?.access, rest?.payload?.refresh );
    dispatch({
      type: ActionType.LOGIN,
      accessToken: rest?.payload?.access,
      refreshToken : rest?.payload?.refresh,
    });
  };
};

export const Login = (loginData:LoginDataType) => async (dispatch:any) => {
  let response =   await loginService.login(loginData);
  dispatch(setAccessToken(response.data));
  return response.data;
};

export const refreshToken = (token:string) => async () => {
  let response =   await loginService.refreshToken({ refresh :token });
  setAccessToken(response?.data);
  return response?.data;
};


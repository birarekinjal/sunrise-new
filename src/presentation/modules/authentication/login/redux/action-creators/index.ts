import { Dispatch } from 'redux';
import { LoginService } from '../../../../../../infrastructure/services/login/login.service';
import { LoginDataType } from '../../models/loginDataModel';
import { ActionType } from '../action-types';
import { Action } from '../actions/index';

const loginService = new LoginService();

export const Login = (loginData:LoginDataType) => async (dispatch: Dispatch<Action>) => {
  let response =   await loginService.login(loginData);
  dispatch({
    type: ActionType.LOGIN,
    payload: response,
  });
};

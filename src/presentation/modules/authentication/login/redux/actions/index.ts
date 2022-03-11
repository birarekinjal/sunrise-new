import { ActionType } from '../action-types/index';

interface LoginAction {
  type: ActionType.LOGIN,
  accessToken:string,
  refreshToken : string,
}

export type Action =  LoginAction  ;
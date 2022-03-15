import { ActionType } from '../action-types/index';

interface LoginAction {
  type: ActionType.LOGIN,
  accessToken:any,
  refreshToken : any
}

export type Action =  LoginAction  ;
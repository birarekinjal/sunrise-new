import { ActionType } from '../action-types/index';

interface LoginAction {
  type: ActionType.LOGIN,
  payload: any
}

export type Action =  LoginAction ;
import { ActionType } from '../action-types/index';

interface SetAction {
  type: ActionType.SET_COLLAPSE,
  payload: boolean
}

interface SetActionData {
  type: ActionType.SET_COLLAPSE_DATA,
  payload: boolean
}
  

export type Action = SetAction ;
export type ActionData = SetActionData;
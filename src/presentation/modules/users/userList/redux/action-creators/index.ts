import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions/index';

export const fetchUser = (userData:any) => (dispatch: Dispatch<Action>) => {

  
  dispatch({
    type: ActionType.FETCH_USERS,
    payload: userData,
  });
};

/* eslint-disable @typescript-eslint/default-param-last */
import { ActionType } from '../action-types/index';
import { Action } from '../actions';

const initialState = {
  token: {},
};

const reducer = (state: any = initialState, action: Action): any => {
  switch (action.type) {
    case ActionType.LOGIN:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;

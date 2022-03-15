/* eslint-disable @typescript-eslint/default-param-last */
import { ActionType } from '../action-types/index';
import { Action } from '../actions';

const initialState = {
  accessToken:'',
  refreshToken : '',
};

const reducer = (state: any = initialState, action: Action): any => {
  switch (action.type) {
    case ActionType.LOGIN:
      return { ...state, accessToken :action?.accessToken, refreshToken :action?.refreshToken  };
    default:
      return state;
  }
};

export default reducer;

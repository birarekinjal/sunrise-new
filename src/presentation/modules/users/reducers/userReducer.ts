import { ActionType } from '../action-types/index';
import { Action } from '../actions';

const initialState = {
  user: {},
};

const reducer = (state: any = initialState, action: Action): any => {
  switch (action.type) {
    case ActionType.FETCH_USERS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;

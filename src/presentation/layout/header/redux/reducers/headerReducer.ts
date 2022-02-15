/* eslint-disable @typescript-eslint/default-param-last */
import { ActionType } from '../action-types/index';
import { Action, ActionData } from '../actions';

const initialState = {
  collapse: false,
  collapseData : false,
};

const reducer = (state: any = initialState, action: Action | ActionData): any => {
  switch (action.type) {
    case  ActionType.SET_COLLAPSE: {
      return { collapse :action.payload };
    }
    case ActionType.SET_COLLAPSE_DATA: {
      return { collapseData: action.payload };
    }
    default:
      return state;
  }
};

export default reducer;

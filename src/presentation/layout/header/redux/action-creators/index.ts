import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action, ActionData } from '../actions/index';

export const setCollapse = (flag : boolean) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.SET_COLLAPSE,
    payload: flag,
  });
};

export const setCollapseData = (flag : boolean) => (dispatch: Dispatch<ActionData>) => {
  dispatch({
    type: ActionType.SET_COLLAPSE_DATA,
    payload: flag,
  });
};


export function typedAction<T extends string>(type: T): { type: T };
export function typedAction<T extends string, P extends any>(
  type: T,
  payload: P
): { type: T; payload: P };
export function typedAction(type: string, payload?: any) {
  return { type, payload };
}

export type HeaderState = {
  collapse: boolean;
};

const initialState: HeaderState = { collapse: false };

export const setCollapse = (collapse: boolean) => {
  return typedAction('SET_COLLAPSE', collapse);
};


type HeaderAction = ReturnType<typeof setCollapse>;

export function HeaderReducer(
  action: HeaderAction,
  state = initialState,
): HeaderState {
  switch (action.type) {
    case 'SET_COLLAPSE':
      return { collapse: action.payload };
    default:
      return state;
  }
}
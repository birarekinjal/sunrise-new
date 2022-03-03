import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { store } from '../store/store';
//  import type { RootState, AppDispatch } from '../store/store';


  export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
 export type AppDispatch = typeof store.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
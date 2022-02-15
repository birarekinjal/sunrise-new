import { combineReducers } from 'redux';
import { userReducer } from '../modules/users';
import headerReducer from '../layout/header/redux/reducers/headerReducer';

const reducers = combineReducers({
  user: userReducer,
  header: headerReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;

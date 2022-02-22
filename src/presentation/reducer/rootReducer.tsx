import { combineReducers } from 'redux';
import headerReducer from '../layout/header/redux/reducers/headerReducer';
import loginReducer from '../modules/login/redux/reducers/loginReducer';

const reducers = combineReducers({
  header: headerReducer,
  login: loginReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;

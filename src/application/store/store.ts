import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../../presentation/reducer/rootReducer';

export const store = createStore(
  reducers,
  {},
  applyMiddleware(thunk),
);
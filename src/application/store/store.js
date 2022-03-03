// import { useDispatch } from 'react-redux';
// import { applyMiddleware, createStore } from 'redux';
// import thunk from 'redux-thunk';
// import reducers from '../../presentation/reducer/rootReducer';

// export const store = createStore(
//   reducers,
//   {},
//   applyMiddleware(thunk),
// );




import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import reducers from '../../presentation/reducer/rootReducer';
import storage from 'redux-persist/es/storage'; // defaults to localStorage for web and AsyncStorage for react-native

const isDev = process.env.NODE_ENV !== 'production';

const persistConfig = {
  key: 'esg',
  storage,
};

const initialState = {};

const persistedReducer = persistReducer(persistConfig, reducers);
// To add redux devtools extension support
const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const middleware = [thunkMiddleware];
const enhancer = isDev
  ? composeEnhancers(applyMiddleware(...middleware))
  : applyMiddleware(...middleware);

const store = createStore(persistedReducer, initialState, enhancer);

const persistor = persistStore(store);

export { store, persistor };



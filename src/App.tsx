import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './application/store/store';
import './application/style/common.scss';
import RoutesData from './presentation/routes/routes';
// import { persistor, store } from './redux/store';

function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <main className="App">
          <RoutesData />
        </main>
      </PersistGate>
    </Provider>
  );
}

export default App;

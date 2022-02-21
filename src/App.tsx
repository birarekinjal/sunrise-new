import React from 'react';
import { Provider } from 'react-redux';
import { store } from './application/store/store';
import './application/style/common.scss';
import RoutesData from './presentation/routes/routes';
function App() {

  return (
    <Provider store={store}>
      <main className="App">
        <RoutesData />
      </main>
    </Provider>
  );
}

export default App;

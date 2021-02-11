import React from 'react';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import './config/reactotronConfig';

import Routes from './routes';
import history from './services/history';

// deve vir depois do reactotron se não tem acesso as funções
import { store, persistor } from './store';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <GlobalStyle />
          <ToastContainer autoClose={4000} />
          <Routes />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;

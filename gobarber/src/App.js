import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import './config/reactotronConfig';

import Routes from './routes';
import history from './services/history';

// deve vir depois do reactotron se não tem acesso as funções
import store from './store';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyle />
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;

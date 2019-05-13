import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import App from './App';
import Header from './header/header';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Header />
      <App />
    </HashRouter>
  </Provider>
);

export default Root;
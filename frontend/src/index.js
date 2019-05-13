import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './stores/store';
import "./stylesheet/application.scss";

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
  window.dispatch = store.dispatch;
  window.getState = store.getState;
});

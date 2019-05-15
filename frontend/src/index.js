import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './stores/store';
import "./stylesheet/application.scss";
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './utils/sessions_api_util';

///testing to be removed
import { logout, login, signup } from './actions/session_actions';
import { fetchTrips, fetchTrip } from './actions/trip_actions'

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);

    const decodedUser = jwt_decode(localStorage.jwtToken)
    const preloadedState = { session: { isAuthenticated: true, user: decodedUser } }
    
    store = configureStore(preloadedState)
    const currentTime = Date.now() / 1000;

    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = '/login'
    }
  } else {
    store = configureStore({});
  }

  const root = document.getElementById('root');
  window.login = login
  window.logout = logout
  window.signup = signup
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  window.fetchTrips = fetchTrips;
  window.fetchTrip = fetchTrip;
  
  ReactDOM.render(<Root store={store}/>, root);
});

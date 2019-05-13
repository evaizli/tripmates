import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const mapStateToProps = state => (
  {loggedIn: state.session.isAuthenticated}
)

const Auth = ({ loggedIn, exact, path, component: Component }) => (
  <Route 
    path={path} 
    exact={exact}
    render={(props) => (
      !loggedIn? (
        <Component {...props}/>
      ) : (
        <Redirect to="trips" />
      )
    )} 
  />
);

const Protected = ({ component: Component, loggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      loggedIn ? (
        <Component {...props} />
      ) : (
          // Redirect to the login page if the user is already authenticated
          <Redirect to="/login" />
        )
    }
  />
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
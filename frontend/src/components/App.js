import React from 'react';
import { Switch } from 'react-router-dom';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './shared/modal';
import TripsDashContainer from './trips_dash/trips_dash_container';
import Splash from './splash/splash';
import { Route } from 'react-router-dom';

const App = () => {

  return (
    <div className="App">
      <Modal />
      <Switch>
        <Route exact path='/dashboard' component={TripsDashContainer}/>
        <Route exact path='/' component={Splash}/>
      </Switch>
    </div>
  );
}

export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ProtectedRoute} from '../utils/route_util';
import Modal from './shared/modal';
import TripsDashContainer from './trips_dash/trips_dash_container';
import TripDashContainer from './trip_dash/trip_dash_container';
import Splash from './splash/splash';

const App = () => {

  return (
    <div className="App">
      <Modal />
      <Switch>
        <Route exact path='/trip/:tripId' component={TripDashContainer}/>
        <ProtectedRoute exact path='/dashboard' component={TripsDashContainer}/>
        <Route exact path='/' component={Splash}/>
      </Switch>
    </div>
  );
}

export default App;

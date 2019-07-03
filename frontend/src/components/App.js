import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute} from '../utils/route_util';
import Modal from './shared/modal';
import TripsDashContainer from './trips_dash/trips_dash_container';
import TripDashContainer from './trip_dash/trip_dash_container';
import Splash from './splash/splash';
import About from './about/about';


const App = () => {

  return (
    <div className="App">
      <Modal />
      <Switch>
        <ProtectedRoute exact path='/trip/:tripId' component={TripDashContainer} />
        <ProtectedRoute exact path='/dashboard' component={TripsDashContainer} />
        <AuthRoute exact path='/about' component={About} />
        <AuthRoute exact path='/' component={Splash} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

export default App;

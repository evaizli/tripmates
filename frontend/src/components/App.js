import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './shared/modal';
import TripsDashContainer from './trips_dash/trips_dash_container';
import TripItineraryContainer from './trip_itinerary/trip_itinerary_container';
import Splash from './splash/splash';

const App = () => {

  return (
    <div className="App">
      <Modal />
      <Switch>
        <Route exact path='/itinerary' component={TripItineraryContainer}/>
        <Route exact path='/dashboard' component={TripsDashContainer}/>
        <Route exact path='/' component={Splash}/>
      </Switch>
    </div>
  );
}

export default App;

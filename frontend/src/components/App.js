import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Modal from './shared/modal';
import TripsDashContainer from './trips_dash/trips_dash_container';
import Splash from './splash/splash';

const App = () => {

  return (
    <div className="App">
      <Modal />
      <Switch>
        <Route exact path='/:userId/dashboard' component={TripsDashContainer}/>
        <Route exact path='/' component={Splash}/>
      </Switch>
    </div>
  );
}

export default App;

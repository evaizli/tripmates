import React from 'react';
import Header from './header/header';
import SplashImg from '../../assets/images/ha_long_bay_jeff_dam.jpg';

const Splash = () => {

  return (
    <section className="splash">
      <Header />
      <div>
        <h1 className="splash-text">Plan a trip with your mates!</h1>
      </div>
    </section>
  );
};

export default Splash;
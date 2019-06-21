import React from 'react';
import { Link } from 'react-router-dom';
import SessionButtonContainer from './header_session_buttons/session_button_container';

const Header = () => {
  
  return (
    <section className="header-main">
      <div className="header-container">
        <h1>TripMates</h1>
        <SessionButtonContainer />
      </div>
        <Link to={'/about-us'}>
          <div className="about-us-btn">About Us</div>
        </Link>
    </section>
  )
}

export default Header;
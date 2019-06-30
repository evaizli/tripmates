import React from 'react';
import SessionButtonContainer from './header_session_buttons/session_button_container';
import { Link } from 'react-router-dom';

const Header = () => {
  
  return (
    <section className="header-main">
      <div className="header-container">
        <h1 className="logo"><Link to="/">TripMates</Link></h1>
        <SessionButtonContainer />
      </div>
    </section>
  )
}

export default Header;
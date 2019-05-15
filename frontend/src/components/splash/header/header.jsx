import React from 'react';
import SessionButtonContainer from './header_session_buttons/session_button_container';

const Header = () => {
  
  return (
    <section className="header-main">
      <div className="header-container">
        <h1>TripMates</h1>
        <SessionButtonContainer />
      </div>
    </section>
  )
}

export default Header;
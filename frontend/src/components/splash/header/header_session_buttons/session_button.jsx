import React from 'react';

const SessionButtons = ({ openModal }) => (
  <nav className="login-signup-buttons">
    <button className="session-button" onClick={() => openModal('login')}>Log In</button>
    <button className="session-button" onClick={() => openModal('signup')}>Sign Up</button>
  </nav>
);



export default SessionButtons;
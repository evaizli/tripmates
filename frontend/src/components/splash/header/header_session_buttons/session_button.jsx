import React from 'react';

const SessionButtons = ({ openModal }) => (
  <nav className="session-buttons">
    <button className="session-button" onClick={() => openModal({ type: 'login' })}>Log In</button>
    <button className="session-button" onClick={() => openModal({ type: 'signup' })}>Sign Up</button>
  </nav>
);



export default SessionButtons;
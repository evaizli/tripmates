import React from 'react';
import { Link } from 'react-router-dom';

const SessionButtons = ({ openModal }) => (
  <nav className="flex-row">
    <Link to={'/about'}>
      <button>About</button>
    </Link>
    <button onClick={() => openModal({ type: 'login' })}>Log In</button>
    <button onClick={() => openModal({ type: 'signup' })}>Sign Up</button>
  </nav>
);



export default SessionButtons;
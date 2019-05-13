import React from 'react';

const SessionButtons = ({ currentUser, openModal }) => {

  const logoutButton = () => (
    <div className="username-logout-button">
      {/* <h4 className="username">Currently logged in as {currentUser.username}.</h4> */}
      <button className="session-button" onClick={() => {}}>Log Out</button>
    </div>
  )

  const sessionButtons = () => (
    <nav className="login-signup-buttons">
      <button className="session-button" onClick={() => openModal('login')}>Log In</button>
      <button className="session-button" onClick={() => openModal('signup')}>Sign Up</button>
    </nav>
  )

  return (
    currentUser ? logoutButton() : sessionButtons()
  )

};

export default SessionButtons;
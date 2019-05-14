import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = ({ logout }) => {

  return (
    <section className="sidebar-main">
      <div className="sidebar-menu">
        <h1 className="logo">TripMates</h1>
        <div className="sidebar-menu-items">
          <div>
            <div className="sidebar-menu-item"><Link to='/dashboard'>Trips Dashboard</Link></div>
            <div className="sidebar-menu-item"><Link to='/'>Link 1</Link></div>
            <div className="sidebar-menu-item"><Link to='/'>Link 2</Link></div>
            <div className="sidebar-menu-item"><Link to='/'>Link 3</Link></div>
            <div className="sidebar-menu-item"><Link to='/'>Link 4</Link></div>
          </div>
          
          <div className="sidebar-menu-item" onClick={ logout }><Link to='/'>Log Out</Link></div>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
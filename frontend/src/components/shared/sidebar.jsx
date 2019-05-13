import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {

  return (
    <section className="sidebar-main">
      <div className="sidebar-menu">
        <h1>Tripmates</h1>
        <div className="sidebar-menu-item"><Link to='/'>Home</Link></div>
        <div className="sidebar-menu-item"><Link to='/'>Link 1</Link></div>
        <div className="sidebar-menu-item"><Link to='/'>Link 2</Link></div>
        <div className="sidebar-menu-item"><Link to='/'>Link 3</Link></div>
        <div className="sidebar-menu-item"><Link to='/'>Link 4</Link></div>
      </div>
      <div className="sidebar-menu-item">
        <Link to='/'>Log Out</Link>
      </div>
    </section>
  );
};

export default SideBar;
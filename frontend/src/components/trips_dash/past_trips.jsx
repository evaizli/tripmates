import React from 'react';
import { Link } from 'react-router-dom';

const UpcomingTrips = () => {

  return (
    <section className="upcoming-trips-main">
      <h2>Past Trips</h2>
      <div className="upcoming-trips-content">
        <Link to="/" className="upcoming-trips-item">
          <div className="upcoming-trips-item-info">
            <h2>Trip 1</h2>
            <h3>London</h3>
            <h4>July 10-July 30</h4>
          </div>
          <div className="upcoming-trips-item-background">
          </div>
        </Link>
        <Link to="/" className="upcoming-trips-item">
          <div className="upcoming-trips-item-info">
            <h2>Trip 1</h2>
            <h3>London</h3>
            <h4>July 10-July 30</h4>
          </div>
          <div className="upcoming-trips-item-background">
          </div>
        </Link>
        <Link to="/" className="upcoming-trips-item">
          <div className="upcoming-trips-item-info">
            <h2>Trip 1</h2>
            <h3>London</h3>
            <h4>July 10-July 30</h4>
          </div>
          <div className="upcoming-trips-item-background">
          </div>
        </Link>
        <Link to="/" className="upcoming-trips-item">
          <div className="upcoming-trips-item-info">
            <h2>Trip 1</h2>
            <h3>London</h3>
            <h4>July 10-July 30</h4>
          </div>
          <div className="upcoming-trips-item-background">
          </div>
        </Link>
        <Link to="/" className="upcoming-trips-item">
          <div className="upcoming-trips-item-info">
            <h2>Trip 1</h2>
            <h3>London</h3>
            <h4>July 10-July 30</h4>
          </div>
          <div className="upcoming-trips-item-background">
          </div>
        </Link>
        <Link to="/" className="upcoming-trips-item">
          <div className="upcoming-trips-item-info">
            <h2>Trip 1</h2>
            <h3>London</h3>
            <h4>July 10-July 30</h4>
          </div>
          <div className="upcoming-trips-item-background">
          </div>
        </Link>
      </div>
    </section>
  );
};

export default UpcomingTrips;
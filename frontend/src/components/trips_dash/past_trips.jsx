import React from 'react';
import { Link } from 'react-router-dom';

const UpcomingTrips = () => {

  return (
    <section className="upcoming-trips-main">
      <h1>Past Trips</h1>
      <div className="upcoming-trips-content">
        <Link to="/" className="upcoming-trips-item">
          <h2>Trip 1</h2>
          <h3>London</h3>
          <h4>July 10-July 30</h4>
        </Link>
        <Link to="/" className="upcoming-trips-item">
          <h2>Trip 2</h2>
          <h3>Japan</h3>
          <h4>July 10-July 30</h4>
        </Link>
        <Link to="/" className="upcoming-trips-item">
          <h2>Trip 3</h2>
          <h3>Mexico</h3>
          <h4>July 10-July 30</h4>
        </Link>
        <Link to="/" className="upcoming-trips-item">
          <h2>Trip 4</h2>
          <h3>Vegas</h3>
          <h4>July 10-July 30</h4>
        </Link>
        <Link to="/" className="upcoming-trips-item">
          <h2>Trip 1</h2>
          <h3>London</h3>
          <h4>July 10-July 30</h4>
        </Link>
        <Link to="/" className="upcoming-trips-item">
          <h2>Trip 2</h2>
          <h3>Japan</h3>
          <h4>July 10-July 30</h4>
        </Link>
        <Link to="/" className="upcoming-trips-item">
          <h2>Trip 3</h2>
          <h3>Mexico</h3>
          <h4>July 10-July 30</h4>
        </Link>
        <Link to="/" className="upcoming-trips-item">
          <h2>Trip 4</h2>
          <h3>Vegas</h3>
          <h4>July 10-July 30</h4>
        </Link>
      </div>
    </section>
  );
};

export default UpcomingTrips;
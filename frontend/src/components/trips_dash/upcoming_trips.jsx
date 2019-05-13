import React from 'react';
import { Link } from 'react-router-dom';

const UpcomingTrips = props => {

  return (
    <section className="upcoming-trips-main">
      <h1>Upcoming Trips</h1>
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
        <Link to="/" onClick={props.openModal} className="upcoming-trips-item-add">
          <img height="75" src="https://image.flaticon.com/icons/svg/32/32339.svg" alt="plus"/>
        </Link>
      </div>
    </section>
  );
};

export default UpcomingTrips;
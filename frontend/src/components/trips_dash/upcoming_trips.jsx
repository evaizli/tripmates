import React from 'react';
import { Link } from 'react-router-dom';

const UpcomingTrips = props => {

  return (
    <section className="upcoming-trips-main">
      <h2>Upcoming Trips</h2>
      <div className="upcoming-trips-content">
        <Link to="/trip" className="upcoming-trips-item">
            <div className="upcoming-trips-item-info">
              <h2>Trip 1</h2>
              <h3>London</h3>
              <h4>July 10-July 30</h4>
            </div>
          <div className="upcoming-trips-item-background">
          </div>
        </Link>
        <Link to="/trip" className="upcoming-trips-item">
            <div className="upcoming-trips-item-info">
              <h2>Trip 1</h2>
              <h3>London</h3>
              <h4>July 10-July 30</h4>
            </div>
          <div className="upcoming-trips-item-background">
          </div>
        </Link>
        <Link to="/trip" className="upcoming-trips-item">
            <div className="upcoming-trips-item-info">
              <h2>Trip 1</h2>
              <h3>London</h3>
              <h4>July 10-July 30</h4>
            </div>
          <div className="upcoming-trips-item-background">
          </div>
        </Link>
        <Link to="/trip" className="upcoming-trips-item">
            <div className="upcoming-trips-item-info">
              <h2>Trip 1</h2>
              <h3>London</h3>
              <h4>July 10-July 30</h4>
            </div>
          <div className="upcoming-trips-item-background">
          </div>
        </Link>
        <Link to="/trip" className="upcoming-trips-item">
            <div className="upcoming-trips-item-info">
              <h2>Trip 1</h2>
              <h3>London</h3>
              <h4>July 10-July 30</h4>
            </div>
          <div className="upcoming-trips-item-background">
          </div>
        </Link>
        <Link to="/" onClick={props.openModal} className="upcoming-trips-item-add">
          <img height="60" src="https://image.flaticon.com/icons/svg/32/32339.svg" alt="plus"/>
        </Link>
      </div>
    </section>
  );
};

export default UpcomingTrips;
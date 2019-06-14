import React from 'react';
import { Link } from 'react-router-dom';
import { tripStartDateFinder, tripEndDateFinder } from '../../utils/date_sort_api_util';

const TripsDashItems = ({ tripType, trips, openModal }) => {
  const addTrip = tripType === 'Upcoming' ? (
    <Link to="/" onClick={openModal} className="upcoming-trips-item-add" title="Add a Trip">
      <img src="https://image.flaticon.com/icons/svg/32/32339.svg" alt="plus" />
    </Link>
    ) : "";
  
  const tripButtons = trips.map((trip, idx) => {
    const destinations = trip.destinations;
    const tripStartDate = tripStartDateFinder(destinations);
    const tripEndDate = tripEndDateFinder(destinations);
    return (
      <Link key={idx} to={`/trip/${trip._id}`} className="upcoming-trips-item">
        <div className="upcoming-trips-item-info">
          <h3>{trip.tripName}</h3>
          <h4>{tripStartDate} <br/> to <br/> {tripEndDate}</h4>
        </div>
        <div className="upcoming-trips-item-background">
        </div>
      </Link>
    )
  })

  return (
    <section className="upcoming-trips-main">
      <h2>{tripType} Trips</h2>
      <div className="upcoming-trips-content">
        { tripButtons }
        { addTrip }
      </div>
    </section>
  );
};

export default TripsDashItems;
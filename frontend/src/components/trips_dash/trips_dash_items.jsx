import React from 'react';
import { Link } from 'react-router-dom';
import { tripStartDateFinder, tripEndDateFinder } from '../../utils/datetime_api_util';

const TripsDashItems = ({ tripType, trips, openModal }) => {
  const addTrip = tripType === 'Future' ? (
    <div onClick={openModal} className="trips-dash-item-add" title="Add a Trip">
      <img src="https://image.flaticon.com/icons/svg/32/32339.svg" alt="plus" />
    </div>
    ) : "";
  
  const tripButtons = trips.map((trip, idx) => {
    const destinations = trip.destinations;
    const tripStartDate = tripStartDateFinder(destinations);
    const tripEndDate = tripEndDateFinder(destinations);
    return (
      <Link key={idx} to={`/trip/${trip._id}`} className="trips-dash-item">
        <div className="trips-dash-item-info">
          <h3>{trip.tripName}</h3>
          <h4>{tripStartDate} <br/> to <br/> {tripEndDate}</h4>
        </div>
        <div className="trips-dash-item-background">
        </div>
      </Link>
    )
  })

  const tripTitle = tripType === 'in Progress' ? 'Trips in Progress' : `${ tripType } Trips`;

  return (
    <section className="trips-dash-item-main">
      <h2>{ tripTitle }</h2>
      <div className="trips-dash-item-content">
        { tripButtons }
        { addTrip }
      </div>
    </section>
  );
};

export default TripsDashItems;
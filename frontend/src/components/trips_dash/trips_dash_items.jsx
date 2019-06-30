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
    const titleText = trip.description === "" ? trip.tripName : `${trip.tripName} - ${trip.description}`; 
    const tripDates = trip.destinations.length > 0 ? 
      <div className="date-info">
        <h4>{`${tripStartDateFinder(trip.destinations)}`}</h4>
        <h4>to</h4>
        <h4>{`${tripEndDateFinder(trip.destinations)}`}</h4>
      </div>
     : "";
    const tripName = trip.tripName.length > 27 ? trip.tripName.slice(0,27) + "..." : trip.tripName;

    return (
      <Link key={idx} to={`/trip/${trip._id}`} className="trips-dash-item" title={ titleText }>
        <div className="trips-dash-item-info">
          <div className="trip-name">
            <h3>{ tripName }</h3>
          </div>
          {tripDates}
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
import React from 'react';
import { Link } from 'react-router-dom';

const TripsDashItems = ({ tripType, trips, openModal }) => {
  const addTrip = tripType === 'Upcoming' ? (
    <Link to="/" onClick={openModal} className="upcoming-trips-item-add">
      <img src="https://image.flaticon.com/icons/svg/32/32339.svg" alt="plus" />
    </Link>
    ) : "";

  const convertDate = (date) => {
    const dateOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(date).toLocaleDateString("en-US", dateOptions);
  }

  const sortStartDateAsc = (destinations) => {
    const destinationsDup = Object.assign([], destinations);
    const compareDateAsc = (a, b) => (a.startDate < b.startDate ? -1 : 1);
    return destinationsDup.sort(compareDateAsc);
  }

  const sortEndDateDesc = (destinations) => {
    const destinationsDup = Object.assign([], destinations);
    const compareDateDesc = (a, b) => (a.endDate > b.endDate ? -1 : 1);
    return destinationsDup.sort(compareDateDesc);
  }

  
  const tripButtons = trips.map((trip, idx) => {
    const tripStartDate = convertDate(sortStartDateAsc(trip.destinations, 'asc')[0].startDate);
    const tripEndDate = convertDate(sortEndDateDesc(trip.destinations, 'desc')[0].endDate);
    return (
      <Link key={idx} to={`/trip/${trip._id}`} className="upcoming-trips-item">
        <div className="upcoming-trips-item-info">
          <h3>{trip.tripName}</h3>
          <h4>{tripStartDate} to {tripEndDate}</h4>
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
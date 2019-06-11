import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = ({ logout, trips }) => {

  const convertDate = (date) => {
    const dateOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(date).toLocaleDateString("en-US", dateOptions);
  };

  const sortStartDateAsc = (destinations) => {
    const destinationsDup = Object.assign([], destinations);
    const compareDateAsc = (a, b) => (a.startDate < b.startDate ? -1 : 1);
    return destinationsDup.sort(compareDateAsc);
  };

  const upcomingTrips = (trips) => {
    const sortStartDateAsc = (destinations) => {
      const destinationsDup = Object.assign([], destinations);
      const compareDateAsc = (a, b) => (a.startDate < b.startDate ? -1 : 1);
      return destinationsDup.sort(compareDateAsc);
    };

    const dateNow = new Date();
    return trips.filter(trip => {
      const startDate = sortStartDateAsc(trip.destinations)[0].startDate;
      return new Date(startDate) > dateNow;
    });
  };

  const tripsStartDates = upcomingTrips(trips).map(trip => {
    const tripStartDate = convertDate(sortStartDateAsc(trip.destinations, 'asc')[0].startDate);
    return {name: trip.tripName, startDate: tripStartDate, tripId: trip._id};
  });

  const tripCountdown = tripsStartDates.map((trip, idx) => {
    const dateNow = new Date().getTime();
    const startDate = new Date(trip.startDate).getTime(); 
    const oneDay = 1000 * 60 * 60 * 24; 
    const daysLeft = Math.floor((startDate - dateNow) / oneDay);

    return (
      <Link key={idx} to={`/trip/${trip.tripId}`}>
      <div key={idx} className="sidebar-menu-item flex-col">
          <div>{`${daysLeft} days`}</div>
          <div>until</div>
          <div>{`${trip.name}`}</div>
        </div>
      </Link>
    )
  })

  return (
    <section className="sidebar-main">
      <div className="sidebar-menu">
        <h1 className="logo">TripMates</h1>
        <div className="sidebar-menu-items">
          <div>
            <Link to='/dashboard'>
              <div className="sidebar-menu-item">Trips Dashboard</div>
            </Link>
            <div className="sidebar-menu-item sidebar-menu-item-countdown">Trip Countdown</div>
            
            <div className="flex-col">
              {tripCountdown}
            </div>
          </div>
          
          <div className="sidebar-menu-item-logout" onClick={ logout }>Log Out</div>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
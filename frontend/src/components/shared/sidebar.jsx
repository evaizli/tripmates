import React from 'react';
import { Link } from 'react-router-dom';
import TripsDash from '../trips_dash/trips_dash';

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

  const tripsStartDates = trips.map(trip => {
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
            <div className="sidebar-menu-item"><Link to='/dashboard'>Trips Dashboard</Link></div>
            <div className="sidebar-menu-item"><Link to='/'>Link 1</Link></div>
            <div className="sidebar-menu-item"><Link to='/'>Link 2</Link></div>
            <div className="sidebar-menu-item"><Link to='/'>Link 3</Link></div>
            <div className="sidebar-menu-item"><Link to='/'>Link 4</Link></div>
            <div className="sidebar-menu-item">Trip Countdown</div>
            
            <div className="flex-col">
              {tripCountdown}
            </div>
          </div>
          
          <div className="sidebar-menu-item-logout" onClick={ logout }><Link to='/'>Log Out</Link></div>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
import React from 'react';
import { Link } from 'react-router-dom';
import { futureTrips, tripStartDateFinder } from '../../utils/datetime_api_util';

class SideBar extends React.Component {

  componentDidMount() {
    this.props.fetchTrips();
  }

  scrollTo (e, id) {
    e.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  }

  render() {
    const { trips, logout } = this.props;

    const tripsStartDates = futureTrips(trips).map(trip => {
      const tripStartDate = tripStartDateFinder(trip.destinations);
      return { name: trip.tripName, startDate: tripStartDate, tripId: trip._id };
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

    const tripCountdownItem = () => {
      if (tripsStartDates.length > 0) {
        return(
          <>
            <div className="sidebar-menu-item sidebar-menu-item-countdown">Trip Countdown</div>
            <div className="flex-col">
              { tripCountdown } 
            </div>
          </>
        );
      }
    }
    
    const tripNav = () => {
      if (this.props.pageType === "Trip Dash") {
        return (
          <>
            <a href="#logistics" onClick={e => this.scrollTo(e, "logistics")}>
              <div className="sidebar-menu-item">Logitsics</div>
            </a>
            <a href="#itinerary" onClick={e => this.scrollTo(e, "itinerary")}>
              <div className="sidebar-menu-item">Itinerary</div>
            </a>
          </>
        )
      }
    }

    return(
      <section className = "sidebar-main" > 
        <div className="sidebar-menu">
          <h1 className="logo">TripMates</h1>
          <div className="sidebar-menu-items">
            <div>
              <Link to='/dashboard'>
                <div className="sidebar-menu-item">Trips Dashboard</div>
              </Link>
              { tripNav() }
              { tripCountdownItem() }
            </div>
            <div className="sidebar-menu-item-logout" onClick={logout}>Log Out</div>
          </div>
        </div>
        <div className="spacing">
        </div>
      </section>
    );
  }
}

export default SideBar;
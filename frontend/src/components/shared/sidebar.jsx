import React from 'react';
import { Link } from 'react-router-dom';
import { futureTripsFinder, tripStartDateFinder } from '../../utils/datetime_api_util';
import logoutIcon from '../../assets/images/logout.svg';

class SideBar extends React.Component {

  componentDidMount() {
    this.props.fetchTrips();
  }

  scrollTo (id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  }

  sortTrips(trips) {
    const tripsDup = Object.assign([], trips);
    const compareTrip = (a, b) => (new Date(tripStartDateFinder(a.destinations)) < new Date(tripStartDateFinder(b.destinations)) ? -1 : 1);
    return tripsDup.sort(compareTrip);
  }

  render() {
    const { trips, logout } = this.props;

    const allTrips = trips.filter(trip => {
      return trip.destinations.length > 0;
    });

    const futureTrips = this.sortTrips(futureTripsFinder(allTrips));

    const tripsStartDates = futureTrips.map(trip => {
      const tripStartDate = tripStartDateFinder(trip.destinations);
      return { name: trip.tripName, startDate: tripStartDate, tripId: trip._id };
    });

    const tripsCountdown = tripsStartDates.map((trip, idx) => {
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

    const tripsCountdownItem = () => {
      if (tripsStartDates.length > 0) {
        return(
          <>
            <div className="sidebar-menu-item sidebar-menu-item-countdown">Trips Countdown</div>
            <div className="flex-col">
              { tripsCountdown } 
            </div>
          </>
        );
      }
    }
    
    const tripNav = () => {
      if (this.props.pageType === "Trip Dash" && this.props.destinationsCount > 0) {
        return (
          <>
            <Link to='/dashboard'>
              <div className="sidebar-menu-item">Trips Dashboard</div>
            </Link>
            <div 
              className="sidebar-menu-item" 
              onClick={() => this.scrollTo("logistics")}
            >Logitsics</div>
            <div 
              className="sidebar-menu-item" 
              onClick={() => this.scrollTo("itinerary")}
            >Itinerary</div>
          </>
        )
      } else if (this.props.pageType === "Trip Dash") {
        return (          
          <Link to='/dashboard'>
            <div className="sidebar-menu-item">Trips Dashboard</div>
          </Link>
        )
      }
    }

    return(
      <section className = "sidebar-main" > 
        <div className="sidebar-menu">
          <h1 className="logo">TripMates</h1>
          <div className="sidebar-menu-items">
            <div>
              { tripNav() }
              { tripsCountdownItem() }
            </div>
            <div className="sidebar-menu-item-logout" onClick={logout}>
              <img className="logout-icon" src={logoutIcon} alt=""/>
              Log Out
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SideBar;
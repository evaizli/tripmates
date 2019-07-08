import React from 'react';
import { Link } from 'react-router-dom';
import { futureTripsFinder, getDateNow } from '../../utils/datetime_api_util';
import logoutIcon from '../../assets/images/logout.svg';

class SideBar extends React.Component {

  componentDidMount() {
    this.props.fetchTrips();
  }

  scrollTo (id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  }

  render() {
    const { trips, destinations, logout } = this.props;

    const futureTrips = futureTripsFinder(trips, destinations);

    const tripsCountdown = futureTrips.slice(0,5).map((trip, idx) => {
      const dateNow = new Date(getDateNow()).getTime();
      const startDate = new Date(trip.startDate).getTime();
      const oneDay = 1000 * 60 * 60 * 24;
      const daysLeft = Math.floor((startDate - dateNow) / oneDay);
      const daysLeftText = daysLeft <= 1 ? `${daysLeft} day` : `${daysLeft} days`;

      return (
        <Link key={idx} to={`/trip/${trip.tripId}`}>
          <div key={idx} className=" flex-col">
            <div>{ daysLeftText }</div>
            <div>until</div>
            <div>{`${trip.name}`}</div>
          </div>
        </Link>
      )
    })

    const tripsCountdownItem = () => {
      if (futureTrips.length > 0) {
        return(
          <>
            <div className="sidebar-menu-item-countdown">Trips Countdown</div>
            <div className="sidebar-menu-countdown-item">
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
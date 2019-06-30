import React from 'react';
import SidebarContainer from '../shared/sidebar_container';
import TripLogistics from './trip_logistics';
import TripItinerary from './trip_itinerary';
import { sortStartDateAsc, tripStartDateFinder, tripEndDateFinder } from '../../utils/datetime_api_util';

class TripDash extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0); 
    this.props.fetchTrip(this.props.match.params.tripId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.tripId !== this.props.match.params.tripId) {
      this.props.fetchTrip(this.props.match.params.tripId);
      window.scrollTo(0, 0);
    }
  }

  render() {
    let { trip, destinations, activities} = this.props;
    if (!trip) return null;
    
    const destinationsSorted = destinations.length > 0 ? sortStartDateAsc(destinations) : [];
    const tripStartDate = destinations.length > 0 ? tripStartDateFinder(destinations) : new Date();
    const tripEndDate = destinations.length > 0 ? tripEndDateFinder(destinations) : new Date();
    const tripItinerary = destinations.length > 0 ? <TripItinerary tripId={trip._id} activities={activities} tripDates={{ start: tripStartDate, end: tripEndDate }} openModal={this.props.openModal}/> : "";
    const tripDates = destinations.length > 0 ? `${tripStartDateFinder(destinations)} to ${tripEndDateFinder(destinations)}` : "";

    return (
      <section className="trip-dash-main">
        <SidebarContainer pageType="Trip Dash" destinationsCount={destinations.length}/>
        <div className="trip-dash-content">
          <div className="trip-dash-header">
            <h1>{trip.tripName}</h1>
            <h3>{tripDates}</h3> 
          </div>
          <TripLogistics tripId={trip._id} destinations={destinationsSorted} openModal={this.props.openModal}/>
          { tripItinerary }
        </div>
      </section>
    )
  }
}

export default TripDash;
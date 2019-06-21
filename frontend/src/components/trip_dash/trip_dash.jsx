import React from 'react';
import SidebarContainer from '../shared/sidebar_container';
import TripLogistics from './trip_logistics';
import TripItineraryContainer from './trip_itinerary_container';
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
    destinations = destinations.length < 1 ? trip.destinations : destinations;
    
    const destinationsSorted = trip.destinations.length > 0 ? sortStartDateAsc(destinations) : [];
    const tripStartDate = trip.destinations.length > 0 ? tripStartDateFinder(destinations) : new Date();
    const tripEndDate = trip.destinations.length > 0 ? tripEndDateFinder(destinations) : new Date();
    const tripItinerary = trip.destinations.length > 0 ? <TripItineraryContainer tripId={trip._id} activities={activities} tripDates={{start: tripStartDate, end: tripEndDate}}/> : "";
    const tripDates = trip.destinations.length > 0 ? `${tripStartDateFinder(trip.destinations)} to ${tripEndDateFinder(trip.destinations)}` : "";

    return (
      <section className="trip-dash-main">
        <SidebarContainer pageType="Trip Dash" url={this.props.match.url}/>
        <div className="trip-dash-content">
          <div className="trip-dash-header">
            <h1>{trip.tripName}</h1>
            <h3>{tripDates}</h3> 
          </div>
          <TripLogistics destinations={destinationsSorted} openModal={this.props.openModal}/>
          { tripItinerary }
        </div>
      </section>
    )
  }
}

export default TripDash;
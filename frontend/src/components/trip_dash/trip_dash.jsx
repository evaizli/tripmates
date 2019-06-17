import React from 'react';
import SidebarContainer from '../shared/sidebar_container';
import TripLogistics from './trip_logistics';
import TripItineraryContainer from './trip_itinerary_container';
import { sortStartDateAsc, tripStartDateFinder, tripEndDateFinder } from '../../utils/date_api_util';

class TripDash extends React.Component {

  componentDidMount() {
    this.props.fetchTrip(this.props.match.params.tripId);
  }

  render() {
    let { trip, destinations, activities} = this.props;
    if (!trip) return null;
    destinations = destinations.length < 1 ? trip.destinations : destinations;
    
    const destinationsSorted = sortStartDateAsc(destinations);
    const tripStartDate = tripStartDateFinder(destinations);
    const tripEndDate = tripEndDateFinder(destinations);
    
    return (
      <section className="trip-dash-main">
        <SidebarContainer pageType="Trip Dash" url={this.props.match.url}/>
        <div className="trip-dash-content">
          <div className="trip-dash-header">
            <h1>{trip.tripName}</h1>
            <h3>{tripStartDate} to {tripEndDate}</h3> 
          </div>
          <TripLogistics destinations={destinationsSorted} openModal={this.props.openModal}/>
          <TripItineraryContainer activities={activities} tripDates={{start: tripStartDate, end: tripEndDate}}/>
        </div>
      </section>
    )
  }
}

export default TripDash;
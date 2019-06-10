import React from 'react';
import SidebarContainer from '../shared/sidebar_container';
import TripLogistics from './trip_logistics';
import TripItineraryContainer from './trip_itinerary_container';

class TripDash extends React.Component {

  componentDidMount() {
    this.props.fetchTrip(this.props.match.params.tripId);
  }

  convertDate(date) {
    const dateOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(date).toLocaleDateString("en-US", dateOptions);
  }

  sortStartDateAsc(destinations) {
    const destinationsDup = Object.assign([], destinations);
    const compareDateAsc = (a, b) => (a.startDate < b.startDate ? -1 : 1);
    return destinationsDup.sort(compareDateAsc);
  }

  sortEndDateDesc(destinations) {
    const destinationsDup = Object.assign([], destinations);
    const compareDateDesc = (a, b) => (a.endDate > b.endDate ? -1 : 1);
    return destinationsDup.sort(compareDateDesc);
  }

  render() {
    const { trip } = this.props;
    if (!trip) return null;
    const destinations = trip.destinations;
    const tripStartDate = this.convertDate(this.sortStartDateAsc(destinations, 'asc')[0].startDate);
    const tripEndDate = this.convertDate(this.sortEndDateDesc(destinations, 'desc')[0].endDate);
    const destinationsSorted = this.sortStartDateAsc(destinations, 'asc');

    return (
      <section className="trip-dash-main">
        <SidebarContainer />
        <div className="trip-dash-content">
          <div className="trip-dash-header">
            <h1>{trip.tripName}</h1>
            <h3>{tripStartDate} to {tripEndDate}</h3> 
          </div>
          <TripLogistics destinations={destinationsSorted} convertDate={this.convertDate} openModal={this.props.openModal}/>
          <TripItineraryContainer tripDates={{start: tripStartDate, end: tripEndDate}} convertDate={this.convertDate}/>
        </div>
      </section>
    )
  }
}

export default TripDash;
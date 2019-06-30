import React from 'react';
import SidebarContainer from '../shared/sidebar_container';
import TripLogistics from './trip_logistics';
import TripItinerary from './trip_itinerary';
import { sortStartDateAsc, tripStartDateFinder, tripEndDateFinder } from '../../utils/datetime_api_util';
import editIcon from '../../assets/images/icons8-pencil-24.png'; 

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
    const { trip, destinations, activities } = this.props;
    if (!trip) return null;

    const destinationsCount = destinations.length;
    const destinationsSorted = destinationsCount > 0 ? sortStartDateAsc(destinations) : [];
    const tripStartDate = destinationsCount > 0 ? tripStartDateFinder(destinations) : new Date();
    const tripEndDate = destinationsCount > 0 ? tripEndDateFinder(destinations) : new Date();
    const tripItinerary = destinationsCount > 0 ? 
      <TripItinerary 
        tripId={trip._id} 
        activities={activities} 
        tripDates={{ start: tripStartDate, end: tripEndDate }} 
        openModal={this.props.openModal}
        /> : "";
    const tripDates = destinationsCount > 0 ? `${tripStartDate} to ${tripEndDate}` : "";

    return (
      <section className="trip-dash-main">
        <SidebarContainer pageType="Trip Dash" destinationsCount={destinationsCount}/>
        <div className="trip-dash-content">
          <div className="trip-dash-header">
            <div className="flex-row baseline">
              <h1>{trip.tripName}&nbsp;</h1>
              <img
                src={editIcon}
                className="edit-icon"
                alt="edit"
                onClick={() => this.props.openModal({type: "editTrip", tripId: trip._id})}
                title="Edit Destination"
              />
            </div>
            
            <h3>{tripDates}</h3> 
          </div>
          <TripLogistics 
            tripId={trip._id} 
            destinations={destinationsSorted} 
            openModal={this.props.openModal}
            />
          { tripItinerary }
        </div>
      </section>
    )
  }
}

export default TripDash;
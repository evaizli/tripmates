import React from 'react';
import SidebarContainer from '../shared/sidebar_container';
import TripsDashItems from './trips_dash_items';
import { pastTrips, futureTrips, inProgressTrips, tripStartDateFinder } from '../../utils/datetime_api_util';

class TripsDash extends React.Component {
  constructor(props) {
    super(props);
    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  componentDidMount() {
    this.props.closeModal();
    this.props.fetchTrips();
    window.scrollTo(0, 0); 
  }

  handleOpenModal(e) {
    e.preventDefault();
    this.props.openModal({type: 'createTrip'});
  }

  alphabetizeTrips(trips) {
    const tripsDup = Object.assign([], trips);
    const compareName = (a, b) => (a.tripName < b.tripName ? -1 : 1);
    return tripsDup.sort(compareName);
  }
  
  sortTrips(trips) {
    const tripsDup = Object.assign([], trips);
    const compareTrip = (a, b) => (tripStartDateFinder(a.destinations) < tripStartDateFinder(b.destinations) ? -1 : 1);
    return tripsDup.sort(compareTrip);
  }
  
  render() {
    const { trips } = this.props;
    if (!trips) return null;
    if (trips.length === 0) return null;

    const tentativeTrips = this.alphabetizeTrips(trips).filter(trip => {
      return trip.destinations.length === 0;
    });

    const allTrips = this.sortTrips(trips.filter(trip => {
      return trip.destinations.length > 0;
    }));

    const inProgressTripsItems = (inProgressTrips(allTrips).length > 0) ? 
      <TripsDashItems tripType="in Progress" trips={inProgressTrips(allTrips)} openModal={this.handleOpenModal} /> :
      "";

    const pastTripsItems = (pastTrips(allTrips).length > 0) ? 
      <TripsDashItems tripType="Past" trips={pastTrips(allTrips)} openModal={this.handleOpenModal} /> :
      "";

    return (
      <section className="trips-dash-main">
        <SidebarContainer pageType="Trips Dash"/>
        <div className="trips-dash-content">
          { inProgressTripsItems }
          <TripsDashItems tripType="Future" trips={futureTrips(allTrips).concat(tentativeTrips)} openModal={this.handleOpenModal}/>
          { pastTripsItems }
        </div>
      </section>
    );
  }
}

export default TripsDash;
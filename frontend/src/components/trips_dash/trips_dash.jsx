import React from 'react';
import SidebarContainer from '../shared/sidebar_container';
import TripsDashItems from './trips_dash_items';
import { pastTrips, futureTrips, inProgressTrips } from '../../utils/datetime_api_util';

class TripsDash extends React.Component {
  constructor(props) {
    super(props);
    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  componentDidMount() {
    this.props.closeModal();
    this.props.fetchTrips();
  }

  handleOpenModal(e) {
    e.preventDefault();
    this.props.openModal({type: 'createTrip'});
  }
  
  render() {
    const { trips } = this.props;
    if (!trips) return null;
    if (trips.length === 0) return null;

    const tentativeTrips = trips.filter(trip => {
      return trip.destinations.length === 0;
    });

    const allTrips = trips.filter(trip => {
      return trip.destinations.length > 0;
    });

    const inProgressTripsItems = (inProgressTrips(allTrips).length > 0) ? 
      <TripsDashItems tripType="in Progress" trips={inProgressTrips(allTrips)} openModal={this.handleOpenModal} /> :
      "";

    const pastTripsItems = (pastTrips(allTrips).length > 0) ? 
      <TripsDashItems tripType="Past" trips={pastTrips(allTrips)} openModal={this.handleOpenModal} /> :
      "";

    const tentativeTripsItems = (tentativeTrips.length > 0) ? 
      <TripsDashItems tripType="Tentative" trips={tentativeTrips} openModal={this.handleOpenModal} /> :
      "";

    return (
      <section className="trips-dash-main">
        <SidebarContainer />
        <div className="trips-dash-content">
          { inProgressTripsItems }
          <TripsDashItems tripType="Future" trips={futureTrips(allTrips)} openModal={this.handleOpenModal}/>
          { tentativeTripsItems }
          { pastTripsItems }
        </div>
      </section>
    );
  }
}

export default TripsDash;
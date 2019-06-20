import React from 'react';
import SidebarContainer from '../shared/sidebar_container';
import TripsDashItems from './trips_dash_items';
import { pastTrips, upcomingTrips, inProgressTrips } from '../../utils/datetime_api_util';

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
    this.props.openModal("createTrip");
  }
  
  render() {
    const { trips } = this.props;
    if (!trips) return null;
    if (trips.length === 0) return null;

    const inProgressTripsItems = (inProgressTrips(trips).length > 0) ? 
      <TripsDashItems tripType="in Progress" trips={inProgressTrips(trips)} openModal={this.handleOpenModal} /> :
      "";

    const pastTripsItems = (inProgressTrips(trips).length > 0) ? 
      <TripsDashItems tripType="Past" trips={pastTrips(trips)} openModal={this.handleOpenModal} /> :
      "";

    return (
      <section className="trips-dash-main">
        <SidebarContainer />
        <div className="trips-dash-content">
          { inProgressTripsItems }
          <TripsDashItems tripType="Future" trips={upcomingTrips(trips)} openModal={this.handleOpenModal}/>
          { pastTripsItems }
        </div>
      </section>
    );
  }
}

export default TripsDash;
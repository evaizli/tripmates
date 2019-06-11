import React from 'react';
import SidebarContainer from '../shared/sidebar_container';
import TripsDashItems from './trips_dash_items';
import { pastTrips, upcomingTrips, inProgressTrips } from '../../utils/date_sort_api_util';

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

    return (
      <section className="trips-dash-main">
        <SidebarContainer />
        <div className="trips-dash-content">
          <TripsDashItems tripType="In Progress" trips={inProgressTrips(trips)} openModal={this.handleOpenModal}/>
          <TripsDashItems tripType="Upcoming" trips={upcomingTrips(trips)} openModal={this.handleOpenModal}/>
          <TripsDashItems tripType="Past" trips={pastTrips(trips)} openModal={this.handleOpenModal}/>
        </div>
      </section>
    );
  }
}

export default TripsDash;
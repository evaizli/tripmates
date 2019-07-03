import React from 'react';
import SidebarContainer from '../shared/sidebar_container';
import TripsDashItems from './trips_dash_items';
import { parseTrips } from '../../utils/datetime_api_util';

class TripsDash extends React.Component {
  constructor(props) {
    super(props);
    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  componentDidMount() {
    this.props.closeModal();
    window.scrollTo(0, 0); 
  }

  handleOpenModal(e) {
    e.preventDefault();
    this.props.openModal({type: 'createTrip'});
  }
  
  render() {
    const { trips, destinations } = this.props;
    if (!trips) return null;
    const { pastTrips, inProgressTrips, futureTrips } = parseTrips(trips, destinations);

    const inProgressTripsItems = (inProgressTrips.length > 0) ? 
      <TripsDashItems tripType="in Progress" trips={inProgressTrips} /> :
      "";

    const pastTripsItems = (pastTrips.length > 0) ? 
      <TripsDashItems tripType="Past" trips={pastTrips} /> :
      "";

    return (
      <section className="trips-dash-main">
        <SidebarContainer pageType="Trips Dash"/>
        <div className="trips-dash-content">
          { inProgressTripsItems }
          <TripsDashItems tripType="Future" trips={futureTrips} openModal={this.handleOpenModal}/>
          { pastTripsItems }
        </div>
      </section>
    );
  }
}

export default TripsDash;
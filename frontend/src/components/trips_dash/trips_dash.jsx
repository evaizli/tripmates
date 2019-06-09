import React from 'react';
import SidebarContainer from '../shared/sidebar_container';
import TripsDashItems from './trips_dash_items';

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

  pastTrips(trips) {
    const sortEndDateDesc = (destinations) => {
      const destinationsDup = Object.assign([], destinations);
      const compareDateDesc = (a, b) => (a.endDate > b.endDate ? -1 : 1);
      return destinationsDup.sort(compareDateDesc);
    };

    const dateNow = new Date();
    return trips.filter(trip => {
      const endDate = sortEndDateDesc(trip.destinations)[0].endDate;
      return new Date(endDate) < dateNow;
    });
  }

  upcomingTrips(trips) {
    const sortStartDateAsc = (destinations) => {
      const destinationsDup = Object.assign([], destinations);
      const compareDateAsc = (a, b) => (a.startDate < b.startDate ? -1 : 1);
      return destinationsDup.sort(compareDateAsc);
    };

    const dateNow = new Date();
    return trips.filter(trip => {
      const startDate = sortStartDateAsc(trip.destinations)[0].startDate;
      return new Date(startDate) > dateNow;
    });
  }

  render() {
    const { trips } = this.props;
    if (!trips) return null;
    const pastTrips = this.pastTrips(trips);
    const upcomingTrips = this.upcomingTrips(trips);

    return (
      <section className="trips-dash-main">
        <SidebarContainer />
        <div className="trips-dash-content">
          <TripsDashItems tripType="Upcoming" trips={upcomingTrips} openModal={this.handleOpenModal}/>
          <TripsDashItems tripType="Past" trips={pastTrips} openModal={this.handleOpenModal}/>
        </div>
      </section>
    );
  }
}

export default TripsDash;
import React from 'react';
import Sidebar from '../shared/sidebar';
import UpcomingTrips from './upcoming_trips';
import PastTrips from './past_trips';

class TripsDash extends React.Component {
  constructor(props) {
    super(props);
    this.handleOpenModal = this.handleOpenModal.bind(this);
  }



//   function openNav() {
//   document.getElementById("mySidenav").style.width = "250px";
//   document.getElementById("main").style.marginLeft = "250px";
// }

//   function closeNav() {
//   document.getElementById("mySidenav").style.width = "0";
//   document.getElementById("main").style.marginLeft = "0";

  handleOpenModal(e) {
    e.preventDefault();
    this.props.openModal("createTrip");
  }

  render() {

    return (
      
      <section className="trips-dash-main">
        <Sidebar />
        <div className="trips-dash-content">
          <UpcomingTrips openModal={this.handleOpenModal}/>
          <PastTrips />
        </div>
      </section>
    );
  }
}

export default TripsDash;
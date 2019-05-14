import React from 'react';
import Sidebar from '../shared/sidebar';
import TripLogistics from './trip_logistics';
import TripItineraryContainer from './trip_itinerary_container';

class TripDash extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tripName: 'Nevada/Utah Climbing',
      tripDescription: 'A fun rock climbing trip!',
      destinations: [
        {
          location: 'Las Vegas', 
          startDate: "2019-10-10", 
          endDate: "2019-10-15",
          housing: "Bellagio, Confirm#: FJFH32J, Booked under Jeff",
          transportation: "Enterprise, full-size, Confirm#234JG2, Booked under Andrew",
          notes: ""
        },
        {
          location: "Moe's Valley", 
          startDate: "2019-10-25", 
          endDate: "2019-10-30",
          housing: "Airbnb, confirm# GSE234D, Booked under Eve",
          transportation: "Enterprise, full-size, Confirm#234JG2, Booked under Andrew",
          notes: ""
        },
        {
          location: "Zion NPS",
          startDate: "2019-10-15",
          endDate: "2019-10-25",
          housing: "Airbnb, confirm# GSE234D, Booked under Eve",
          transportation: "Enterprise, full-size, Confirm#234JG2, Booked under Andrew",
          notes: ""
        }
      ]
    };
  }

  convertDate(date) {
    const dateOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(date + "T00:00:00-07:00").toLocaleDateString("en-US", dateOptions);
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
    const { destinations } = this.state;
    const tripStartDate = this.convertDate(this.sortStartDateAsc(destinations, 'asc')[0].startDate);
    const tripEndDate = this.convertDate(this.sortEndDateDesc(destinations, 'desc')[0].endDate);
    const destinationsSorted = this.sortStartDateAsc(destinations, 'asc');

    return (
      <section className="trip-dash-main">
        <Sidebar />
        <div className="trip-dash-content">
          <div className="trip-dash-header">
            <h1>{this.state.tripName}</h1>
            <h3>{tripStartDate} to {tripEndDate}</h3> 
          </div>
          <TripLogistics destinations={destinationsSorted} convertDate={this.convertDate} openModal={this.props.openModal}/>
          <TripItineraryContainer tripDates={{start: tripStartDate, end: tripEndDate}}/>
        </div>
      </section>
    )
  }
}

export default TripDash;
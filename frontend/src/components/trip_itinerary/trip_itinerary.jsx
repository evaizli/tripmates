import React from 'react';
import Sidebar from '../shared/sidebar';
import TripLogistics from './trip_logistics';

class TripItinerary extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tripName: 'Red Rocks Climbing',
      tripDescription: 'A fun rock climbing trip!',
      destinations: [
        {
          location: 'Las Vegas', 
          startDate: "2019-10-10", 
          endDate: "2019-15-20",
          housing: "Bellagio, Confirm#: FJFH32J, Booked under Jeff",
          transportation: "Enterprise, full-size, Confirm#234JG2, Booked under Jeff",
          notes: ""
        },
        {
          location: "Moe's Valley", 
          startDate: "2019-20-10", 
          endDate: "2019-10-30",
          housing: "",
          transportation: "",
          notes: ""
        },
        {
          location: "Zion NPS",
          startDate: "2019-15-10",
          endDate: "2019-20-30",
          housing: "",
          transportation: "",
          notes: ""
        }
      ]
    };
  }

  render() {

    const destinationsDup = Object.assign([], this.state.destinations);
    const compareDateAsc = (a, b) => (a.startDate < b.startDate ? -1 : 1);
    const tripStartDate = destinationsDup.sort(compareDateAsc)[0].startDate;
    const compareDateDesc = (a, b) => (a.endDate > b.endDate ? -1 : 1);
    const tripEndDate = destinationsDup.sort(compareDateDesc)[0].endDate;

    const destinationsSorted = destinationsDup.sort(compareDateAsc);

    return (
      <section className="trip-itinerary-main">
        <Sidebar />
        <div className="trip-itinerary-content">
          <div className="trip-itinerary-header">
            <h1>{this.state.tripName}</h1>
            <h3>{tripStartDate} to {tripEndDate}</h3> 
          </div>
          <TripLogistics destinations={destinationsSorted}  />
        </div>
      </section>
    )
  }
}

export default TripItinerary;
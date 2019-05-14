import React from 'react';

class TripItinerary extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.activities;
    this.tripDates = this.props;
  }

  render() {
    return (
      <section className="trip-itinerary-main">
        <h1>Itinerary</h1>
        <div className="trip-itinerary-week">
          <div className="trip-itinerary-day">
            <h4>Sunday</h4>
            <div className="trip-itinerary-day-details">
            </div>
          </div>
          <div className="trip-itinerary-day">
            <h4>Monday</h4>
            <div className="trip-itinerary-day-details">
            </div>
          </div>
          <div className="trip-itinerary-day">
            <h4>Tuesday</h4>
            <div className="trip-itinerary-day-details">
            </div>
          </div>
          <div className="trip-itinerary-day">
            <h4>Wednesday</h4>
            <div className="trip-itinerary-day-details">
            </div>
          </div>
          <div className="trip-itinerary-day">
            <h4>Thursday</h4>
            <div className="trip-itinerary-day-details">
            </div>
          </div>
          <div className="trip-itinerary-day">
            <h4>Friday</h4>
            <div className="trip-itinerary-day-details">
            </div>
          </div>
          <div className="trip-itinerary-day">
            <h4>Saturday</h4>
            <div className="trip-itinerary-day-details">
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default TripItinerary;
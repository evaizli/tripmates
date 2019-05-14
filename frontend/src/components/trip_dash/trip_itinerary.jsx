import React from 'react';

class TripItinerary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tripDates: this.props.tripDates,
      activities: this.props.activities
    }
    this.tripDates = this.props;
  }


  parseDates(activities) {
    const activitiesCatDate = {}
    activities.forEach((activity, idx) => {
      if (activitiesCatDate[activity.activityDate]) {
        activitiesCatDate[activity.activityDate].push(activity)
      } else {
        activitiesCatDate[activity.activityDate] = [activity]
      }
    })
    return activitiesCatDate;
  }

  render() {
    const startDate = new Date(this.state.tripDates.start);
    const endDate = new Date(this.state.tripDates.end);
    
    // const activitiesByDate = this.parseDates(this.props.activities);

    const allDates = [startDate];
    for (let i = 1; allDates.slice(allDates.length - 1)[0] < endDate; i++ ) {
      let newDate = new Date(startDate)
      newDate.setDate(newDate.getDate() + i)
      allDates.push(newDate);
    }

    console.log(allDates);






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
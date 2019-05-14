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
      const date = new Date(activity.activityDate);
      if (activitiesCatDate[date.toDateString()]) {
        activitiesCatDate[date.toDateString()].push(activity)
      } else {
        activitiesCatDate[date.toDateString()] = [activity]
      }
    })
    return activitiesCatDate;
  }

  render() {
    const startDate = new Date(this.state.tripDates.start);
    const endDate = new Date(this.state.tripDates.end);
    
    const activitiesByDate = this.parseDates(this.props.activities);

    let startWeek = new Date(startDate);
    startWeek.setDate(startWeek.getDate() - startWeek.getDay())
    let endWeek = new Date(endDate);
    endWeek.setDate(endWeek.getDate() + endWeek.getDay())

    const allDates = [startWeek];
    for (let i = 1; allDates.slice(allDates.length - 1)[0] < endWeek; i++ ) {
      let newDate = new Date(startWeek)
      newDate.setDate(newDate.getDate() + i)
      allDates.push(newDate);
    }

    console.log(activitiesByDate)
    const calendar = allDates.map((day, idx) => {
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
      
      console.log(day)
      if (activitiesByDate[day.toDateString()]) {
        console.log(activitiesByDate[day.toDateString()])
      }

      return (
        <div key={idx} className="trip-itinerary-day">
          <h4>{days[day.getDay()]}</h4>
          <h5>{day.toDateString()}</h5>
          <div className="trip-itinerary-day-details">

          </div>
        </div>
      )
    })




    return (
      <section className="trip-itinerary-main">
        <h1>Itinerary</h1>
        <div className="trip-itinerary-week">
          { calendar }
        </div>
      </section>
    )
  }
}

export default TripItinerary;
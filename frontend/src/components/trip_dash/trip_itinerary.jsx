import React from 'react';

class TripItinerary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tripDates: this.props.tripDates,
      activities: this.props.activities
    };
    this.tripDates = this.props;
  }


  parseDates(activities) {
    const activitiesCatDate = {};
    activities.forEach((activity, idx) => {
      const date = new Date(activity.activityDate);
      if (activitiesCatDate[date.toDateString()]) {
        activitiesCatDate[date.toDateString()].push(activity);
      } else {
        activitiesCatDate[date.toDateString()] = [activity];
      }
    });
    return activitiesCatDate;
  }

  createCalendar() {
    
  }

  render() {
    const startDate = new Date(this.state.tripDates.start);
    const endDate = new Date(this.state.tripDates.end);
    
    const activitiesByDate = this.parseDates(this.props.activities);

    let startWeek = new Date(startDate);
    startWeek.setDate(startWeek.getDate() - startWeek.getDay());
    let endWeek = new Date(endDate);
    endWeek.setDate(endWeek.getDate() + endWeek.getDay());

    const allDates = [startWeek];
    for (let i = 1; allDates.slice(allDates.length - 1)[0] < endWeek; i++ ) {
      let newDate = new Date(startWeek);
      newDate.setDate(newDate.getDate() + i);
      allDates.push(newDate);
    }

    const calendar = allDates.map((day, idx) => {
      
      let activityOfDay = "";
      if (activitiesByDate[day.toDateString()]) {
        activityOfDay = activitiesByDate[day.toDateString()].map((activity, idx) => {
          return (
            <h4 key={idx}>{activity.activityName}</h4>
          )
        })
      } 
      
      return (
        <div key={idx} className="trip-itinerary-day">
          <h4>{day.toDateString()}</h4>
          <div className="trip-itinerary-day-details">
            { activityOfDay }
          </div>
        </div>
      )
    })




    return (
      <section className="trip-itinerary-main">
        <h1>Itinerary</h1>
        <div onClick ={() =>this.props.openModal("createActivity")}> + Add Activity</div>
        <div className="trip-itinerary-week">
          { calendar }
        </div>
      </section>
    )
  }
}

export default TripItinerary;
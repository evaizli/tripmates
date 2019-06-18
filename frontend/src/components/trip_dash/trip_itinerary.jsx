import React from 'react';
import addIcon from '../../assets/images/icons8-plus-math-30.png'; 

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
    activities.forEach((activity) => {
      const date = new Date(activity.activityDate);
      if (activitiesCatDate[date.toDateString()]) {
        activitiesCatDate[date.toDateString()].push(activity);
      } else {
        activitiesCatDate[date.toDateString()] = [activity];
      }
    });
    return activitiesCatDate;
  }

  startOfWeek(tripStartDate) {
    const startDateDup = new Date(tripStartDate);
    if (startDateDup.getDay() !== 0) {
      startDateDup.setDate(startDateDup.getDate() - startDateDup.getDay());
    }
    return startDateDup;
  }

  endOfWeek(tripEndDate) {
    const endDateDup = new Date(tripEndDate);
    if (endDateDup.getDay() !== 6) {
      endDateDup.setDate(endDateDup.getDate() + (6-endDateDup.getDay()));
    }
    return endDateDup;
  }

  render() {
    const activitiesByDate = this.parseDates(this.props.activities);

    const startWeek = this.startOfWeek(this.state.tripDates.start);
    const endWeek = this.endOfWeek(this.state.tripDates.end);

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

          const time = new Date(activity.startTime).toLocaleTimeString('en-US', { hour: "numeric", minute: "numeric" });
          return (
<<<<<<< HEAD
            <div key={idx} onClick={() => this.props.openModal({ type: "activityShow", id: activity._id, tripId: this.props.tripId})}>
=======
            <div className="trip-activity" key={idx} onClick={() => this.props.openModal({ type: "activityShow", id: activity._id })}>
>>>>>>> master
              <h4>{time }</h4>
              <h4>{activity.activityName}</h4>
            </div>
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
      <section id="itinerary" className="trip-itinerary-main">
        <h1>Itinerary</h1>
        <div onClick={() => this.props.openModal('createActivity')} className="trip-add">
          <img height="20" src={addIcon} alt="add" />&nbsp;Add Activity
        </div>
        <div className="trip-itinerary-week">
          { calendar }
        </div>
      </section>
    )
  }
}

export default TripItinerary;
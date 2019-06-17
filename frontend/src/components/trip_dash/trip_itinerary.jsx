import React from 'react';
import addIcon from '../../assets/images/icons8-plus-math-30.png'; 
import { allDatesFinder } from '../../utils/date_api_util';

class TripItinerary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tripDates: this.props.tripDates,
      activities: this.props.activities
    };
    this.tripDates = this.props;
  }

  parseActivities(activities) {
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

  render() {
    const activitiesByDate = this.parseActivities(this.props.activities);
    const allDates = allDatesFinder(this.state.tripDates.start, this.state.tripDates.end);
    
    const calendar = allDates.map((day, idx) => {
      let activityOfDay = "";
      if (activitiesByDate[day.toDateString()]) {
        activityOfDay = activitiesByDate[day.toDateString()].map((activity, idx) => {
          const time = new Date(activity.startTime).toLocaleTimeString('en-US', { hour: "numeric", minute: "numeric" });
          
          return (
            <div className="trip-activity" key={idx} onClick={() => this.props.openModal({ type: "activityShow", id: activity._id })}>
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
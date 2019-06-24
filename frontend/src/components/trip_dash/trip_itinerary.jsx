import React from 'react';
import addIcon from '../../assets/images/icons8-plus-math-30.png'; 
import { allDatesFinder, formatTime, sortStartTime } from '../../utils/datetime_api_util';

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
  
    const calendar = allDates.map((week, idxWeek) => {
      const weekDates = week.map((day, idxDay) => {
        return (
          <h4 key={idxDay}>{day.toDateString()}</h4>
        )
      })

      const weekActivities = week.map((day, idxDay) => {
        let activityOfDay = "";
        if (activitiesByDate[day.toDateString()]) {
          const sortedActivities = sortStartTime(activitiesByDate[day.toDateString()])
          activityOfDay = sortedActivities.map((activity, idxActivity) => {
            const time = formatTime(activity.startTime);

            return (
              <div 
                className="trip-activity" 
                key={idxActivity} 
                onClick={() => this.props.openModal({ type: "activityShow", id: activity._id })} 
                title={activity.activityName}
              >
                <h4>{time}</h4>
                <h4>{activity.activityName}</h4>
              </div>
            )
          })
        } 

        const date = new Date(day);
        const startDate = new Date(this.state.tripDates.start);
        const endDate = new Date(this.state.tripDates.end);
        const addActivity = (date >= startDate && date <= endDate) ?
          <div
            className="activity-add"
            onClick={() => this.props.openModal({ type: 'createActivity', date: day })}
            title="Add Activity"
          ></div>
           : 
          <div className="grey"></div>
        ;

        return (
          <div 
            className="trip-itinerary-activity-list" 
            key={idxDay} 
          >
            { activityOfDay }
            { addActivity }
          </div>
        )
      })

      return (
        <div key={idxWeek} className="flex-col">
          <div className="trip-itinerary-date-header">
            { weekDates }
          </div>
          <div className="trip-itinerary-activity-lists">
            { weekActivities }
          </div>
        </div>
      )
    })

    return (
      <section id="itinerary" className="trip-itinerary-main">
        <div className="trip-itinerary-header">
          <h2>Itinerary</h2>
          <div onClick={() => this.props.openModal({type: 'createActivity'})} className="trip-add">
            <img height="20" src={addIcon} alt="add" />&nbsp;Add Activity
          </div>
        </div>
        <div className="trip-itinerary-week">
          { calendar }
        </div>
      </section>
    )
  }
}

export default TripItinerary;
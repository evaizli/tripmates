import React from 'react';
import addIcon from '../../assets/images/icons8-plus-math-30.png'; 
import { allDatesFinder, formatTime, formatDate, sortStartTime } from '../../utils/datetime_api_util';

const TripItinerary = ({ tripId, activities, tripDates, openModal }) => {

  const parseActivities = (activities) => {
    const activitiesCatDate = {};
    activities.forEach((activity) => {
      const date = formatDate(activity.activityDate);
      if (activitiesCatDate[date]) {
        activitiesCatDate[date].push(activity);
      } else {
        activitiesCatDate[date] = [activity];
      }
    });
    return activitiesCatDate;
  };

  const activitiesByDate = parseActivities(activities);
  const allDates = allDatesFinder(tripDates.start, tripDates.end);
  
  const calendar = allDates.map((week, idxWeek) => {
    const weekDates = week.map((day, idxDay) => {
      return (
        <h4 key={idxDay}>{formatDate(day)}</h4>
      )
    })

    const weekActivities = week.map((day, idxDay) => {
      let activityOfDay = "";
      if (activitiesByDate[day]) {
        const sortedActivities = sortStartTime(activitiesByDate[day])
        activityOfDay = sortedActivities.map((activity, idxActivity) => {
          const time = formatTime(activity.startTime);
          return (
            <div 
              className="trip-activity" 
              key={idxActivity} 
              onClick={() => openModal({ type: "activityShow", activityId: activity._id, tripId })} 
              title={activity.activityName}
            >
              <h5>{time}</h5>
              <h5>{activity.activityName}</h5>
            </div>
          )
        })
      } 

      const date = new Date(day);
      const startDate = new Date(tripDates.start);
      const endDate = new Date(tripDates.end);
      const addActivity = (date >= startDate && date <= endDate) ?
        <div
          className="activity-add"
          onClick={() => openModal({ type: 'createActivity', tripId, date: date.toISOString() })}
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
        <div onClick={() => openModal({ type: 'createActivity', tripId })} className="add-button">
          <img src={addIcon} alt="add" />
          &nbsp;Add Activity
        </div>
      </div>
      <div className="trip-itinerary-week">
        { calendar }
      </div>
    </section>
  )
}

export default TripItinerary;
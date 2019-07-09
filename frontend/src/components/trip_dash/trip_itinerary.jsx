import React from 'react';
import addIcon from '../../assets/images/icons8-plus-math-30.png'; 
import { allDatesFinder, formatTime, formatDate, sortStartTime } from '../../utils/datetime_api_util';

const TripItinerary = ({ tripId, activities, tripDates, openModal }) => {
  const { startDate, endDate } = tripDates;
  
  const parseActivities = (activities) => {
    const activitiesCatDate = {};
    activities.forEach((activity) => {
      const date = activity.activityDate;
      if (activitiesCatDate[date]) {
        activitiesCatDate[date].push(activity);
      } else {
        activitiesCatDate[date] = [activity];
      }
    });
    return activitiesCatDate;
  };

  const activitiesByDate = parseActivities(activities);
  const allDates = allDatesFinder(startDate, endDate);
  
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
          const startTime = formatTime(activity.startTime);
          const endTime = formatTime(activity.endTime);
          return (
            <div 
              className="trip-activity" 
              key={idxActivity} 
              onClick={() => openModal({ type: "activityShow", activityId: activity._id, tripId })} 
              title={`${startTime} - ${startTime}: ${activity.activityName}`}
            >
              <h5>{time}</h5>
              <h5>{activity.activityName}</h5>
            </div>
          )
        })
      } 
      
      const addActivity = (day >= startDate && day <= endDate) ?
        <div
          className="activity-add"
          onClick={() => openModal({ type: 'createActivity', tripId, date: day })}
          title="Add Activity"
        >
          <img src={addIcon} alt="add" />
        </div>
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
        <div onClick={() => openModal({ type: 'createActivity', tripId, date: startDate })} className="add-button">
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
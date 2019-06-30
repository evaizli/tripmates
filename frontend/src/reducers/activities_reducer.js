import {
  RECEIVE_ACTIVITY,
  REMOVE_ACTIVITY
} from "../actions/activity_actions";
import {
  RECEIVE_TRIPS,
  RECEIVE_TRIP
} from "../actions/trip_actions";

const activitiesReducer = (state = {}, action) =>{
    Object.freeze(state);
    let newState;
    switch(action.type){
        case RECEIVE_TRIPS:
            newState = Object.assign({}, state);
            action.trips.forEach(trip => {
                newState[trip._id] = {};
                trip.activities.forEach(activity => {
                    newState[trip._id][activity._id] = activity;
                });
            });
            return newState;
        case RECEIVE_TRIP: 
            newState = Object.assign({}, state);
            const trip = action.trip;
            newState[trip._id] = {};
            trip.activities.forEach(activity => {
                newState[trip._id][activity._id] = activity;
            });
            return newState;
        case RECEIVE_ACTIVITY:
            newState = Object.assign({}, state);
            const activity = action.activity;
            newState[activity.tripId][activity._id] = activity;
            return newState;
        case REMOVE_ACTIVITY:
            newState = Object.assign({}, state);
            const { tripId, activityId } = action.activity;
            delete newState[tripId][activityId];
            return newState;
        default: 
            return state;
    }
}

export default activitiesReducer;
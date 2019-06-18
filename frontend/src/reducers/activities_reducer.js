import {
  RECEIVE_ACTIVITIES,
  RECEIVE_ACTIVITY,
  REMOVE_ACTIVITY
} from "../actions/activity_actions";
import {
  RECEIVE_TRIP
} from "../actions/trip_actions";

const activitiesReducer = (state = [], action) =>{
    Object.freeze(state);
    let newState;
    switch(action.type){
        case RECEIVE_ACTIVITIES:
          return action.activities;
        case RECEIVE_ACTIVITY:
          if (state.length === 0) {
                return [action.activity]
            } else {
                newState = Object.assign([], state);
                let idx = null;
                newState.forEach((activity, i) => {
                  if (activity._id === action.activity._id) {
                    idx = i;
                  }
                });
                if (idx) {
                    newState[idx] = action.activity;
                } else {
                    newState.push(action.activity);
                }
                return newState
            }
        case REMOVE_ACTIVITY:
          newState = state.filter(activity => activity._id !== action.activityId);
          return newState;
        case RECEIVE_TRIP: 
          return action.trip.activities;
        default: 
            return state;
    }
}

export default activitiesReducer;
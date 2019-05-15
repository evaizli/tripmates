import {
  RECEIVE_ACTIVITIES,
  RECEIVE_ACTIVITY,
  REMOVE_ACTIVITY
} from "../actions/activity_actions";

const activitiesReducer = (state = {}, action) =>{
    Object.freeze(state);
    switch(action.type){
        default: 
            return state;
    }
}

export default activitiesReducer;
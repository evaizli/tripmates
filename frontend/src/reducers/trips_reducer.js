import { 
    RECEIVE_TRIPS, 
    RECEIVE_TRIP, 
    REMOVE_TRIP 
} from '../actions/trip_actions';
import {
    RECEIVE_DESTINATION,
} from '../actions/destination_actions';
import {
    RECEIVE_ACTIVITY,
} from "../actions/activity_actions";

const tripsReducer = (state = {}, action ) => {
    Object.freeze(state);
    let newState;
    switch(action.type){
        case RECEIVE_TRIPS:
            newState = Object.assign({}, state);
            action.trips.forEach(trip => {
                newState[trip._id] = trip;
            });
            return newState;
        case RECEIVE_TRIP:
            newState = Object.assign({}, state);
            newState[action.trip._id] = action.trip;
            return newState;
        case REMOVE_TRIP:
            newState = Object.assign({}, state);
            delete newState[action.tripId];
            return newState;
        case RECEIVE_DESTINATION:
            newState = Object.assign({}, state);
            let newDestinations = Object.assign([], newState[action.destination.tripId].destinations);
            let destinationId = action.destination._id;
            
            if (destinationId) {
                for (let i = 0; i < newDestinations.length; i++) {
                    if (newDestinations[i]._id === destinationId) {
                        newDestinations[i] = action.destination;
                    }
                }
            } else {
                newDestinations.push(action.destination);
            }
            
            newState[action.destination.tripId].destinations = newDestinations;
            return newState;
        case RECEIVE_ACTIVITY:
            newState = Object.assign({}, state);
            const tripId = action.activity.tripId;
            const activityId = action.activity._id;
            let newActivities = Object.assign([], newState[tripId].activities);
            
            if (activityId) {
                for (let i = 0; i < newActivities.length; i++) {
                    if (newActivities[i]._id === activityId) {
                        newActivities[i] = action.activity;
                    }
                }
            } else {
                newActivities.push(action.activity);
            }

            newState[tripId].activities = newActivities;
            return newState;
        default:
            return state;
    }
};

export default tripsReducer;
 
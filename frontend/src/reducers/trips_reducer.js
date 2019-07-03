import { 
    RECEIVE_TRIPS, 
    RECEIVE_TRIP, 
    REMOVE_TRIP 
} from '../actions/trip_actions';
import { RECEIVE_USER_LOGOUT } from "../actions/session_actions";

const tripsReducer = (state = {}, action ) => {
    Object.freeze(state);
    let newState;
    switch(action.type){
        case RECEIVE_TRIPS:
            newState = {};
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
        case RECEIVE_USER_LOGOUT: 
            return {};
        default:
            return state;
    }
};

export default tripsReducer;
 
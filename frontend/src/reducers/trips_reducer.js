import { 
    RECEIVE_TRIPS, 
    RECEIVE_TRIP, 
    REMOVE_TRIP 
} from "../actions/trip_actions";

const tripsReducer = (state = [], action) => {
    Object.freeze(state);
    let newState;
    switch(action.type){
        case RECEIVE_TRIPS:
            return action.trips;
        case RECEIVE_TRIP:
            newState = Object.assign([], state, [action.trip]);
            return newState;
        case REMOVE_TRIP:
            newState = state.filter(trip => trip._id !== action.tripId);
            return newState;
        default:
            return state;
    }
};

export default tripsReducer;
 
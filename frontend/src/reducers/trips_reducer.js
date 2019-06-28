import { 
    RECEIVE_TRIPS, 
    RECEIVE_TRIP, 
    REMOVE_TRIP 
} from "../actions/trip_actions";
import {
    RECEIVE_DESTINATION
} from "../actions/destination_actions";

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
            newState = state.filter((trip) => trip._id !== action.tripId);
            return newState;
        case RECEIVE_DESTINATION:
            newState = Object.assign({}, state);
            let destinationId = action.destination._id;
            let trip = newState[action.destination.tripId];
            
            if (destinationId) {
                for (let i = 0; i < trip.destinations.length; i++) {
                    if (trip.destinations[i]._id === destinationId) {
                        trip.destinations[i] = action.destination;
                    }
                }
            } else {
                newState[action.destination.tripId].destinations.push(action.destination);
            }
            return newState;
        default:
            return state;
    }
};

export default tripsReducer;
 
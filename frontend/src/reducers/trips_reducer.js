import { 
    RECEIVE_TRIPS, 
    RECEIVE_TRIP, 
    REMOVE_TRIP 
} from "../actions/trip_actions";

const tripsReducer = (state = [], action ) => {
    Object.freeze(state);
    let newState;
    switch(action.type){
        case RECEIVE_TRIPS:
            return action.trips;
        case RECEIVE_TRIP:
            if (state.length === 0) {
                return [action.trip];
            } else {
                newState = Object.assign([], state);
                let idx;
                newState.forEach((trip, i) =>{
                    if (trip._id === action.trip._id) {
                        idx = i;
                    } 
                });
                if (idx !== undefined) {
                    newState[idx] = action.trip;
                } else {
                    newState.push(action.trip);
                }
                return newState;
            }
        case REMOVE_TRIP:
            newState = state.filter((trip) => trip._id !== action.tripId);
            return newState;
        default:
            return state;
    }
};

export default tripsReducer;
 
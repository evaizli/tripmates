import { 
    RECEIVE_TRIPS, 
    RECEIVE_TRIP, 
    REMOVE_TRIP 
} from "../actions/trip_actions";



const tripsReducer = (state = {}, action ) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_TRIPS:
            return action.trips;
        case RECEIVE_TRIP:
        case REMOVE_TRIP:
        default:
            return state;

    }

}


export default tripsReducer;
 
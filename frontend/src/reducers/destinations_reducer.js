import {
  RECEIVE_DESTINATIONS,
  RECEIVE_DESTINATION,
  REMOVE_DESTINATION
} from "../actions/destination_actions";
import { RECEIVE_TRIP } from "../actions/trip_actions";

const destinationsReducer = (state = [], action) => {
  Object.freeze(state);
  
  let newState;
  switch (action.type) {
    case RECEIVE_DESTINATIONS:
      return state.action
    case RECEIVE_DESTINATION:
      
      newState = Object.assign([], state);
      let destinationId = action.destination._id
      if (destinationId){
        for (let i = 0; i < newState.length; i++){
          if (newState[i]._id === destinationId){
            newState[i] = action.destination;
          }
        }
      } else {
        newState.push(action.destination);
      }
      
      return newState;
    case REMOVE_DESTINATION:
        newState = state.filter(destination => destination._id !== action.destinationId);
        return newState;
    case RECEIVE_TRIP:
      let tripId = action.trip._id;
      newState = Object.assign([], state);
      action.trip.destinations.forEach(destination =>{
        destination["tripId"] = tripId;
        newState.push(destination)
      })
      return newState;
    default:
      return state;
  }
};

export default destinationsReducer;

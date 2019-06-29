// import {
//   RECEIVE_DESTINATIONS,
//   RECEIVE_DESTINATION,
//   REMOVE_DESTINATION
// } from "../actions/destination_actions";
// import { RECEIVE_TRIP, RECEIVE_TRIPS } from "../actions/trip_actions";

const destinationsReducer = (state = {}, action) => {
  Object.freeze(state);
  
  // let newState;
  switch (action.type) {
    // case RECEIVE_DESTINATIONS:
    //   return state.action;
    // case RECEIVE_DESTINATION:
    //   newState = Object.assign({}, state);
      
    //   return newState;
    // case REMOVE_DESTINATION:
    //   newState = state.filter(destination => destination._id !== action.destinationId);
    //   return newState;
    // case RECEIVE_TRIP:
    //   newState = Object.assign({}, state);
      
    //   if (!newState[action.trip._id]) {
    //     newState[action.trip._id] = {};
    //   }

    //   action.trip.destinations.forEach(destination => {
    //     newState[action.trip._id][destination._id] = destination;
    //   });

    //   return newState;
    // case RECEIVE_TRIPS:
    //   newState = Object.assign({}, state);

    //   action.trips.forEach(trip => {
    //     newState[trip._id] = {};
    //     trip.destinations.forEach(destination =>{
    //       newState[trip._id][destination._id] = destination;
    //     });
    //   });

    //   return newState;
    default:
      return state;
  }
};

export default destinationsReducer;

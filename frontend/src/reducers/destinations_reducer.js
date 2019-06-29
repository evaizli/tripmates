import {
  RECEIVE_DESTINATION,
  REMOVE_DESTINATION
} from "../actions/destination_actions";
import {
  RECEIVE_TRIPS,
  RECEIVE_TRIP
} from "../actions/trip_actions";

const destinationsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_TRIPS:
      newState = Object.assign({}, state);
      action.trips.forEach(trip => {
        newState[trip._id] = {};
        trip.destinations.forEach(destination => {
          newState[trip._id][destination._id] = destination;
        });
      });
      return newState;
    case RECEIVE_TRIP:
      newState = Object.assign({}, state);
      const trip = action.trip;
      newState[trip._id] = {};
      trip.destinations.forEach(destination => {
        newState[trip._id][destination._id] = destination;
      });
      return newState;
    case RECEIVE_DESTINATION:
      newState = Object.assign({}, state);
      const destination = action.destination;
      newState[destination.tripId][destination._id] = destination;
      return newState;
    case REMOVE_DESTINATION:
      newState = Object.assign({}, state);
      const { tripId, destinationId } = action.destination;
      delete newState[tripId][destinationId];
      return newState;
    default:
      return state;
  }
};

export default destinationsReducer;

import {
  RECEIVE_DESTINATION,
  REMOVE_DESTINATION
} from "../actions/destination_actions";
import {
  RECEIVE_TRIPS,
  RECEIVE_TRIP
} from "../actions/trip_actions";
import { RECEIVE_USER_LOGOUT } from "../actions/session_actions";

const destinationsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_TRIPS:
      newState = {};
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
      if (!newState[destination.tripId]) {
        newState[destination.tripId] = {};
      }
      newState[destination.tripId][destination._id] = destination;
      return newState;
    case REMOVE_DESTINATION:
      newState = Object.assign({}, state);
      const { tripId, destinationId } = action.destination;
      delete newState[tripId][destinationId];
      return newState;
    case RECEIVE_USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export default destinationsReducer;

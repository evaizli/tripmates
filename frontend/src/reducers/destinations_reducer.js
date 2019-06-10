import {
  RECEIVE_DESTINATIONS,
  RECEIVE_DESTINATION,
  REMOVE_DESTINATION
} from "../actions/destination_actions";

const destinationsReducer = (state = [], action) => {
    // console.log("REDUCER",state)
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_DESTINATIONS:
        return state.action
    case RECEIVE_DESTINATION:
        debugger
          return [action.destination]
    case REMOVE_DESTINATION:
        newState = state.filter(destination => destination._id !== action.destinationId);
        return newState;
    default:
      return state;
  }
};

export default destinationsReducer;

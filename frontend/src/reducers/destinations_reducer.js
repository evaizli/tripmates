import {
  RECEIVE_DESTINATIONS,
  RECEIVE_DESTINATION,
  REMOVE_DESTINATION
} from "../actions/destination_actions";

const destinationsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    default:
      return state;
  }
};

export default destinationsReducer;

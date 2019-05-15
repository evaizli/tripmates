import {
  RECEIVE_DESTINATION_ERRORS,
  CLEAR_DESTINATION_ERRORS
} from "../actions/destination_actions";

const _nullErrors = {};

const destinationErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DESTINATION_ERRORS:
      return action.errors;
    case CLEAR_DESTINATION_ERRORS:
      return _nullErrors;
    default:
      return state;
  }
};

export default destinationErrorsReducer;

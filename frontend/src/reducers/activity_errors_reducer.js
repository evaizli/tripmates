import {
  RECEIVE_ACTIVITY_ERRORS,
  CLEAR_ACTIVITY_ERRORS
} from "../actions/activity_actions";

const _nullErrors = {};

const activityErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ACTIVITY_ERRORS:
      return action.errors;
    case CLEAR_ACTIVITY_ERRORS:
      return _nullErrors;
    default:
      return state;
  }
};

export default activityErrorsReducer;

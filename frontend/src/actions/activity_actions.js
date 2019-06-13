import * as APIUtil from "../utils/activity_api_util";


export const RECEIVE_ACTIVITIES = "RECEIVE_ACTIVITIES";
export const RECEIVE_ACTIVITY = "RECEIVE_ACTIVITY";
export const RECEIVE_ACTIVITY_ERRORS = "RECEIVE_ACTIVITY_ERRORS";
export const CLEAR_ACTIVITY_ERRORS = "CLEAR_ACTIVITY_ERRORS";
export const REMOVE_ACTIVITY = "REMOVE_ACTIVITY";

export const receiveActivities = payload => {
  return {
    type: RECEIVE_ACTIVITIES,
    activities: payload.data
  };
};


export const receiveActivity = payload => {
  return {
    type: RECEIVE_ACTIVITY,
    activity: payload.data
  };
};


export const removeActivity = activity => {
  return {
    type: REMOVE_ACTIVITY,
    activityId: activity._id
  };
};


export const receiveActivityErrors = errors => {
  return {
    type: RECEIVE_ACTIVITY_ERRORS,
    errors
  };
};

export const clearActivityErrors = () => {
  return {
    type: CLEAR_ACTIVITY_ERRORS
  };
};


export const fetchActivities = () => dispatch => {
  return APIUtil.fetchActivities()
    .then(activities => dispatch(receiveActivities(activities)))
    .catch(err => {
      dispatch(receiveActivityErrors(err.response.data));
    });
};


export const fetchActivity = (id) => dispatch => {
  return APIUtil.fetchActivity(id)
    .then(activity => dispatch(receiveActivity(activity)))
    .catch(err => {
      dispatch(receiveActivityErrors(err.response.data));
    });
};

export const createActivity = (data) => dispatch => {
  // debugger
  return APIUtil.createActivity(data)
    .then(data => dispatch(receiveActivity(data)))
    .catch(err => {
      dispatch(receiveActivityErrors(err.response.data));
    });
};


export const updateActivity = (data) => dispatch => {
  return APIUtil.updateActivity(data)
    .then(data => dispatch(receiveActivity(data)))
    .catch(err => {
      dispatch(receiveActivityErrors(err.response.data));
    });
};

export const deleteActivity = (id) => dispatch => {

  return APIUtil.deleteActivity(id)
    .then(activityId => dispatch(removeActivity(activityId)))
    .catch(err => {
      dispatch(receiveActivityErrors(err.response.data));
    });
};

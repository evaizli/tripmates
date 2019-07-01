import * as APIUtil from "../utils/destination_api_util";

export const RECEIVE_DESTINATIONS = "RECEIVE_DESTINATIONS";
export const RECEIVE_DESTINATION = "RECEIVE_DESTINATION";
export const RECEIVE_DESTINATION_ERRORS = "RECEIVE_DESTINATION_ERRORS";
export const CLEAR_DESTINATION_ERRORS = "CLEAR_DESTINATION_ERRORS";
export const REMOVE_DESTINATION = "REMOVE_DESTINATION";

export const receiveDestinations = payload => {
  return {
    type: RECEIVE_DESTINATIONS,
    destinations: payload.data
  };
};

export const receiveDestination = payload => {
  return {
    type: RECEIVE_DESTINATION,
    destination: payload.data
  };
};

export const removeDestination = payload => {
  return {
    type: REMOVE_DESTINATION,
    destination: payload.data
  };
};

export const receiveDestinationErrors = errors => {
  return {
    type: RECEIVE_DESTINATION_ERRORS,
    errors
  };
};

export const clearDestinationErrors = () => {
  return {
    type: CLEAR_DESTINATION_ERRORS
  };
};

export const fetchDestinations = () => dispatch => {
  return APIUtil.fetchDestinations()
    .then(destinations => dispatch(receiveDestinations(destinations)))
    .catch(err => {
      dispatch(receiveDestinationErrors(err.response.data));
    });
};

export const fetchDestination = id => dispatch => {
  return APIUtil.fetchDestination(id)
    .then(destination => dispatch(receiveDestination(destination)))
    .catch(err => {
      dispatch(receiveDestinationErrors(err.response.data));
    });
};

export const createDestination = data => dispatch => {
  return APIUtil.createDestination(data)
    .then(data => dispatch(receiveDestination(data)))
    .catch(err => {
      dispatch(receiveDestinationErrors(err.response.data));
    });
};

export const updateDestination = data => dispatch => {
  return APIUtil.updateDestination(data)
    .then(data => dispatch(receiveDestination(data)))
    .catch(err => {
      dispatch(receiveDestinationErrors(err.response.data));
    });
};

export const deleteDestination = data => dispatch => {
  return APIUtil.deleteDestination(data)
    .then(data => dispatch(removeDestination(data)))
    .catch(err => {
      dispatch(receiveDestinationErrors(err.response.data));
    });
};

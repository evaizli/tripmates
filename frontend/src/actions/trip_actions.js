import * as APIUtil from "../utils/trip_api_util";

export const RECEIVE_TRIPS = "RECEIVE_TRIPS";
export const RECEIVE_TRIP = "RECEIVE_TRIP";
export const RECEIVE_TRIP_ERRORS = "RECEIVE_TRIP_ERRORS";
export const CLEAR_TRIP_ERRORS = "CLEAR_TRIP_ERRORS";
export const REMOVE_TRIP = "REMOVE_TRIP";

export const receiveTrips = (payload) => {
    return ({
        type: RECEIVE_TRIPS, 
        trips: payload.data
    });
};

export const receiveTrip = (payload) => {
    return ({
        type: RECEIVE_TRIP,
        trip: payload.data
    });
};

export const removeTrip = tripId => {
    return {
    type: REMOVE_TRIP,
    tripId
    };
};

export const receiveTripErrors = errors => {
    return ({
        type: RECEIVE_TRIP_ERRORS,
        errors
    });
};

export const clearTripErrors = () => {
    return ({
        type: CLEAR_TRIP_ERRORS
    });
};


export const fetchTrips = () => dispatch => {

    return (
        APIUtil.fetchTrips()
            .then(trips => dispatch(receiveTrips(trips)))
            .catch(err => {dispatch(receiveTripErrors(err.response.data))})
    );
};

export const fetchTrip = (id) => dispatch => {
    return (
        APIUtil.fetchTrip(id)
            .then(trip => dispatch(receiveTrip(trip)))
            .catch(err => dispatch(receiveTripErrors(err.response.data)))
    );
};

export const createTrip = (data) => dispatch => {
    return (
        APIUtil.createTrip(data)
            .then(data => dispatch(receiveTrip(data)))
            .catch(err => dispatch(receiveTripErrors(err.response.data)))
    );
};

export const updateTrip = (data) => dispatch => {
    return (
        APIUtil.updateTrip(data)
            .then(data => dispatch(receiveTrip(data)))
            .catch(err => dispatch(receiveTripErrors(err.response.data)))
    );
};


export const deleteTrip = (id) => dispatch => {
    return (
        APIUtil.deleteTrip(id)
            .then(tripId => dispatch(removeTrip(tripId)))
            .catch(err => dispatch(receiveTripErrors(err.response.data)))
    );
};

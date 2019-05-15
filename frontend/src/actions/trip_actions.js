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

export const removeTrip = (trip) =>{
    return({
        type: REMOVE_TRIP,
        tripId: trip.data._id
    })
}

export const receiveTripErrors = errors => {
    return({
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

    return(
        APIUtil.fetchTrips()
            .then(trips => dispatch(receiveTrips(trips)))
            .catch(err => {dispatch(receiveTripErrors(err.response.data))})
    );
};

export const fetchTrip = (id) => dispatch => {
    return (
        APIUtil.fetchTrip(id)
            .then(trip => dispatch(receiveTrip(trip)))
            .catch(err => { dispatch(receiveTripErrors(err.response.data)) })
    );
};

export const createTrip = (data) => dispatch => {
    return (
        APIUtil.createTrip(data)
            .then(data => dispatch(receiveTrip(data)))
            .catch(err => { dispatch(receiveTripErrors(err.response.data)) })
    );
};

export const updateTrip = (data) => dispatch => {
    return (
        APIUtil.updateTrip(data)
            .then(data => dispatch(receiveTrip(data)))
            .catch(err => { dispatch(receiveTripErrors(err.response.data)) })
    );
};


export const deleteTrip = (id) => dispatch => {
    return (
        APIUtil.deleteTrip(id)
            .then(test => console.log(test))
            // .then(tripId => dispatch(removeTrip(tripId)))
            // .catch(err => { dispatch(receiveTripErrors(err.response.data)) })
    );
};

window.createTrip = createTrip;
window.deleteTrip = deleteTrip;

// dispatch(createTrip({
//     tripLeader: "5cdc41945e8d1005b942378c", tripName: "Europe", destinations: [{ location: "London", startDate: "2019-7-1", endDate: "2019-7-20" }, { location: "Paris", startDate: "2019-7-20", endDate: "2019-7-27" }, { location: "Denmark", startDate: "2019-7-27", endDate: "2019-8-10" }], activities: [{
//         activityName: "Lunch",
//         location: "",
//         address: "",
//         mates: "",
//         tag: "Food",
//         image: [],
//         notes: "",
//         activityDate: "2019-07-01",
//         startTime: "2019-07-01T19:00:00.000+00:00",
//         endTime: "2019-07-01T21:00:00.000+00:00",
//         date: undefined
//     }, {
//         activityName: "Lunch",
//         location: "",
//         address: "",
//         mates: "",
//         tag: "Food",
//         image: [],
//         notes: "",
//         activityDate: "2019-07-02",
//         startTime: "2019-07-02T19:00:00.000+00:00",
//         endTime: "2019-07-02T21:00:00.000+00:00",
//         date: undefined
//     }]
// }))
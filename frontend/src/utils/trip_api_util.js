import axios from "axios";

export const fetchTrips = () => {
    return axios.get('/api/trips')
};

export const fetchTrip = id => {
    return axios.get(`/api/trips/${id}`)
};

export const createTrip = data => {
    return axios.post(`/api/trips/`, data)
};

export const deleteTrip = id => {
    // debugger
    return axios.delete(`/api/trips/${id}`)
}

export const updateTrip = data => {
    return axios.patch(`/api/trips/${data.id}`, data)
}

window.apiDeleteTrip = deleteTrip;
window.axios = axios;
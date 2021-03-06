import axios from "axios";

export const fetchTrips = () => {
    return axios.get('/api/trips');
};

export const fetchTrip = id => {
    return axios.get(`/api/trips/${id}`);
};

export const createTrip = data => {
    return axios.post(`/api/trips/`, data);
};

export const deleteTrip = id => {
    return axios.delete(`/api/trips/${id}/delete`);
};

export const updateTrip = data => {
    return axios.patch(`/api/trips/${data._id}/update`, data);
};

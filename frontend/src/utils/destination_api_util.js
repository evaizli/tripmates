import axios from "axios";

export const fetchDestinations = () => {
    return axios.get('/api/destinations');
};

export const fetchDestination = id => {
    return axios.get(`/api/destinations/${id}`);
};

export const createDestination = data => {
    return axios.post(`/api/destinations/${data.tripId}`, data);
};

export const updateDestination = data => {
    return axios.patch(`/api/destinations/${data.tripId}/${data._id}/update`, data);
};

export const deleteDestination = data => {
    return axios.delete(`/api/destinations/${data.tripId}/${data._id}/delete`);
};
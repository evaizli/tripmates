import axios from "axios";

export const fetchDestinations = () => {
    return axios.get('/api/destinations')
};

export const fetchDestination = id => {
    return axios.get(`/api/destinations/${id}`)
};

export const createDestination = data => {

    return axios.post(`/api/destinations/${data.tripId}`, data)
};

export const deleteDestination = id => {
    return axios.delete(`/api/destinations/${id}`)
}

export const updateDestination = data => {
    return axios.patch(`/api/destinations/${data.id}`, data)
}
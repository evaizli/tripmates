import axios from "axios";

export const fetchDestinations = () => {
    return axios.get('/api/destinations')
};

export const fetchDestination = id => {
    return axios.get(`/api/destinations/${id}`)
};

export const postTrip = data => {
    return axios.post(`/api/destinations/`, data)
};

export const deleteTrip = id => {
    return axios.delete(`/api/destinations/${id}`)
}

export const updateTrip = data => {
    return axios.patch(`/api/destinations/${data.id}`, data)
}
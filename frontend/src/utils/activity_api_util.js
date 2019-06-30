import axios from "axios";

export const fetchActivities = () => {
    return axios.get('/api/activities');
};

export const fetchActivity = id => {
    return axios.get(`/api/activities/${id}`);
};

export const createActivity = data => {
    return axios.post(`/api/activities/${data.tripId}`, data);
};

export const updateActivity = data => {
    return axios.patch(`/api/activities/${data.tripId}/${data._id}/update`, data);
} ;

export const deleteActivity = data => {
    return axios.delete(`/api/activities/${data.tripId}/${data._id}/delete`);
};
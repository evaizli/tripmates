import axios from "axios";

export const fetchActivities = () => {
    return axios.get('/api/activities')
};

export const fetchActivity = id => {
    return axios.get(`/api/activities/${id}`)
};

export const postActivity = data => {
    return axios.post(`/api/activities/`, data)
};

export const deleteActivity = id => {
    return axios.delete(`/api/activities/${id}`)
}

export const updateActivity = data => {
    return axios.patch(`/api/activities/${data.id}`, data)
}
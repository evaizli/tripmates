import { combineReducers } from 'redux';
import tripsReducer from './trips_reducer';
import activitiesReducer from './activities_reducer';
import destinationsReducer from './destinations_reducer';


const entitiesReducer = combineReducers({
    trips: tripsReducer,
    activities: activitiesReducer,
    destinations: destinationsReducer
})

export default entitiesReducer;
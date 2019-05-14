import { combineReducers } from 'redux';
import tripsReducer from './trips_reducer';


const entitiesReducer = combineReducers({
    trips: tripsReducer
})

export default entitiesReducer;
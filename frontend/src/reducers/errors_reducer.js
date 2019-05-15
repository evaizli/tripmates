import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';
import tripErrorsReducer from './trip_errors_reducer';
import activityErrorsReducer from './activity_errors_reducer';
import destinationErrorsReducer from './destination_errors_reducer';

export default combineReducers({
    session: SessionErrorsReducer,
    trip: tripErrorsReducer,
    activity: activityErrorsReducer,
    destination: destinationErrorsReducer
});
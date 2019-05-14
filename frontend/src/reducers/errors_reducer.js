import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';
import tripErrorsReducer from './trip_errors_reducer';

export default combineReducers({
    session: SessionErrorsReducer,
    trip: tripErrorsReducer
});
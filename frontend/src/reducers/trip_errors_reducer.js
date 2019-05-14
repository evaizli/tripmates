import {
    RECEIVE_TRIP_ERRORS,
    CLEAR_TRIP_ERRORS
} from "../actions/trip_actions"

const _nullErrors = {}


const tripErrorsReducer= (state =_nullErrors, action) =>{
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TRIP_ERRORS:
            return action.errors;
        case CLEAR_TRIP_ERRORS:
            return _nullErrors;
        default: 
            return state;
    }
}

export default tripErrorsReducer;
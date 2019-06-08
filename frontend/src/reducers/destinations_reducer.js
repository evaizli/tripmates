import {
  RECEIVE_DESTINATIONS,
  RECEIVE_DESTINATION,
  REMOVE_DESTINATION
} from "../actions/destination_actions";

const destinationsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_DESTINATIONS:
        return state.action
    case RECEIVE_DESTINATION:
        console.log(action.destination)
        if (state.length === 0) {
                return [action.destination]
            } else {
                newState = Object.assign([], state);
                let idx = null;
                newState.forEach((destination, i) =>{
                    if (destination._id === action.destination._id) {
                        idx = i
                    } 
                })
                if (idx) {
                    newState[idx] = action.destination;
                } else {
                    newState.push(action.destination)
                }
                return newState
            }
    case REMOVE_DESTINATION:
        newState = state.filter(destination => destination._id !== action.destinationId);
        return newState;
    default:
      return state;
  }
};

export default destinationsReducer;

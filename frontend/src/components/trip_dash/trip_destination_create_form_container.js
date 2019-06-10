import TripDestinationForm from './trip_destination_form';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { createDestination} from "../../actions/destination_actions";

const mapStateToProps = (state, ownProps) => {
  console.log("FROM CONTAINER",state)
  debugger
  const tripId = state.entities.destinations.length > 0 ? state.entities.destinations[0].tripId 
  : state.entities.trips[0]._id;

  let destination = {
    location: "",
    startDate: new Date(),
    endDate: "",
    housing: "",
    transportation: "",
    notes:"",
    tripId: tripId
  }; 
  return {
    destination,
    formType: "Create Destination",
    errors: state.errors.destination
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()), 
    processForm: (data) => dispatch(createDestination(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TripDestinationForm);
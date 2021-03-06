import TripDestinationForm from './trip_destination_form';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { updateDestination, deleteDestination, clearDestinationErrors } from "../../actions/destination_actions";
import { deleteActivity } from "../../actions/activity_actions";


const mapStateToProps = (state) => {
  const tripId = state.ui.modal.tripId;
  const destinationId = state.ui.modal.destinationId;
  const destination = state.entities.destinations[tripId][destinationId];

  return {
    destination,
    formType: "Edit Destination",
    errors: state.errors.destination,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    processForm: (data) => dispatch(updateDestination(data)),
    deleteDestination: (data) => dispatch(deleteDestination(data)),
    deleteActivity: (data) => dispatch(deleteActivity(data)),
    clearErrors: () => dispatch(clearDestinationErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TripDestinationForm);
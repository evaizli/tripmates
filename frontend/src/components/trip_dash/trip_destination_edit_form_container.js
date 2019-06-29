import TripDestinationForm from './trip_destination_form';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import {updateDestination} from "../../actions/destination_actions";

const mapStateToProps = (state) => {
  const tripId = state.ui.modal.tripId;
  const destinationId = state.ui.modal.destinationId;
  const destination = state.entities.destinations[tripId][destinationId];

  return {
    destination,
    formType: "Edit Destination"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    processForm: (data) => dispatch(updateDestination(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TripDestinationForm);
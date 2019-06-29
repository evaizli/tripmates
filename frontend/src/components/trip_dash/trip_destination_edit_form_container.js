import TripDestinationForm from './trip_destination_form';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import {updateDestination} from "../../actions/destination_actions";

const mapStateToProps = (state) => {
  const destinationId = state.ui.modal.destinationId;
  const tripId = state.ui.modal.tripId;
  
  let destination;
  state.entities.trips[tripId].destinations.forEach(d => {
    if (d._id === destinationId){
      destination = d;
    }
  });

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